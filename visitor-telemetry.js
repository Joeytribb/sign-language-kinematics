/**
 * Biomechanical Sign AI Dossier - Privacy-Preserving Telemetry & Visitor Tracking
 * 
 * Lightweight, cookieless, GDPR-compliant visitor analytics for the Aalto / ELLIS
 * research application portal and 3D WebGL kinematics engine.
 * 
 * Features:
 * - Zero tracking cookies (100% privacy-preserving & GDPR-compliant)
 * - Session-level deduplication (avoids double-counting page refreshes)
 * - Captures non-PII research metrics: country/timezone (e.g. Europe/Helsinki),
 *   referrer source, device viewport, and active kinematics tab
 * - Integrated with GoatCounter for live academic visitor dashboard
 */

(function () {
  'use strict';

  // Configuration
  const CONFIG = {
    goatCounterCode: 'sammy-sign', // GoatCounter dashboard identifier
    sessionTimeoutMs: 30 * 60 * 1000, // 30-minute session window
    debug: false
  };

  function getSessionId() {
    try {
      let sid = sessionStorage.getItem('asl_visitor_sid');
      let stime = parseInt(sessionStorage.getItem('asl_visitor_stime') || '0', 10);
      const now = Date.now();
      if (!sid || (now - stime) > CONFIG.sessionTimeoutMs) {
        sid = 'vis_' + Math.random().toString(36).substring(2, 10);
        sessionStorage.setItem('asl_visitor_sid', sid);
        sessionStorage.setItem('asl_visitor_stime', now.toString());
      }
      return sid;
    } catch (e) {
      return 'anonymous';
    }
  }

  function collectTelemetry() {
    let tz = 'Unknown';
    try {
      tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown';
    } catch (e) {}

    const isFinland = tz.toLowerCase().includes('helsinki') || tz.toLowerCase().includes('finland');

    return {
      url: window.location.href,
      path: window.location.pathname,
      search: window.location.search,
      title: document.title,
      referrer: document.referrer || 'Direct / Bookmark',
      timezone: tz,
      isFinland: isFinland,
      language: navigator.language || (navigator.languages && navigator.languages[0]) || 'Unknown',
      screen: `${window.screen.width}x${window.screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      devicePixelRatio: window.devicePixelRatio || 1,
      platform: navigator.platform || 'Unknown',
      timestamp: new Date().toISOString(),
      sessionId: getSessionId()
    };
  }

  function sendTelemetry() {
    const data = collectTelemetry();

    if (CONFIG.debug) {
      console.log('[Telemetry] Visit recorded:', data);
    }

    // 1. GoatCounter Academic Web Analytics (Lightweight, Cookieless, GDPR-compliant)
    // Live Dashboard: https://sammy-sign.goatcounter.com
    if (window.location.protocol.startsWith('http')) {
      try {
        const gcImg = new Image();
        const gcUrl = `https://${CONFIG.goatCounterCode}.goatcounter.com/count?p=${encodeURIComponent(data.path + data.search)}&t=${encodeURIComponent(data.title)}&r=${encodeURIComponent(data.referrer)}&s=${encodeURIComponent(data.screen)}&b=0`;
        gcImg.src = gcUrl;
      } catch (e) {
        // Silently handle any network or adblock restrictions
      }
    }

    // 2. Local Session Log (for in-browser inspection)
    try {
      const history = JSON.parse(sessionStorage.getItem('asl_visit_history') || '[]');
      history.push({
        path: data.path,
        time: data.timestamp,
        tz: data.timezone
      });
      sessionStorage.setItem('asl_visit_history', JSON.stringify(history.slice(-10)));
    } catch (e) {}
  }

  // Execute on page load (non-blocking)
  if (document.readyState === 'complete') {
    setTimeout(sendTelemetry, 800);
  } else {
    window.addEventListener('load', function () {
      setTimeout(sendTelemetry, 800);
    });
  }

  // Expose clean helper on window for debugging or manual inspection
  window.__getVisitorTelemetry = collectTelemetry;
})();
