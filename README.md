# 15-DOF Biomechanical Hand Kinematics Engine

[![Live Demo: Three.js WebGL](https://img.shields.io/badge/Live%20Demo-Three.js%2015--DOF%20IK-059669.svg)](https://joeytribb.github.io/sign-language-kinematics/04_Procedural_Engine_PoC/anatomical_finger.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![WebGL: Three.js r128](https://img.shields.io/badge/WebGL-Three.js%20r128-black.svg)](https://threejs.org/)

An interactive, anatomically constrained 3D hand kinematics and procedural phonological synthesis engine built with Three.js and WebGL.

---

## ?? Live Interactive Prototype

?? **[Launch Interactive 15-DOF 3D Hand Engine](https://joeytribb.github.io/sign-language-kinematics/04_Procedural_Engine_PoC/anatomical_finger.html)**

---

## ?? Core Kinematics & Architectural Features

1. **15-DOF True 3-Phalanx Hand Anatomy:**
   - Accurate 3-phalanx kinematic chains across all four fingers (MCP flexion/abduction, PIP flexion, DIP flexion).
   - Dedicated 3-DOF thumb chain modeling Trapeziometacarpal/CMC opposition, MCP flexion, and Interphalangeal (IP) actuation.
   - Anisotropic joint limits preventing unnatural hyperextensions and joint inversions.

2. **Closed-Form / Constrained CCD Inverse Kinematics:**
   - Modified Cyclic Coordinate Descent (CCD) IK solver enforcing biological tendon spring dynamics.
   - Sub-millisecond convergence ($\mathcal{O}(1)$ execution time per digit), suitable for real-time 60 Hz avatar animation.

3. **Sub-Lexical Phonological Token Synthesis:**
   - Procedural translation of discrete phonological specifications (ASL-LEX standard) into continuous spatial coordinate targets.
   - Tested across complete American Sign Language alphabet handshapes (A–Z) and procedural out-of-vocabulary (OOV) tokens.

4. **Dual Interface Aesthetics:**
   - **Academic Research UI:** Modern high-contrast technical telemetry HUD with live joint angle readout and real-time IK error metrics.
   - **Leonardo Da Vinci Notebook UI:** Sepia-toned archival parchment aesthetic inspired by classical anatomical studies.

---

## ?? Running Locally

The prototype is completely self-contained with no local build step required (loads Three.js and Tailwind CSS via public CDNs).

### Quickstart

1. Clone this repository:
   ```bash
   git clone https://github.com/Joeytribb/sign-language-kinematics.git
   cd sign-language-kinematics
   ```

2. Start a local HTTP server:
   ```bash
   python -m http.server 8000
   ```

3. Open in your browser:
   ```text
   http://localhost:8000/04_Procedural_Engine_PoC/anatomical_finger.html
   ```
   *(Or simply open `04_Procedural_Engine_PoC/anatomical_finger.html` directly in any WebGL-capable browser).*

---

## ?? Repository Structure

```
+-- .gitignore                                 # Whitelist tracking policy
+-- LICENSE                                    # MIT License
+-- README.md                                  # Engine documentation & demo links
+-- index.html                                 # Root launcher / redirect
+-- 04_Procedural_Engine_PoC/
    +-- anatomical_finger.html                 # Complete 15-DOF WebGL Kinematics Prototype
```

> **Note:** Doctoral application dossier PDFs (Research Proposal, Research Statement, Motivation Letter, and Curriculum Vitae) will be linked here upon formal submission.

---

## ?? License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
