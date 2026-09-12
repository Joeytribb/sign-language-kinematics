# A Bidirectional Neuro-Symbolic Foundation Pipeline for Continuous Sign Language AI

[![Live 3D Demo: Three.js WebGL](https://img.shields.io/badge/Live%20Demo-Three.js%2015--DOF%20IK-059669.svg)](https://joeytribb.github.io/sign-language-kinematics/04_Procedural_Engine_PoC/anatomical_finger.html)
[![Full Proposal: 14 Pages PDF](https://img.shields.io/badge/Proposal%20PDF-14%20Pages%20Verified-0284C7.svg)](https://joeytribb.github.io/sign-language-kinematics/Bidirectional_PhD_Proposal_Aalto_ELLIS.pdf)
[![Doctoral Application: Aalto / ELLIS Finland](https://img.shields.io/badge/Application-Aalto%20%2F%20ELLIS%20Finland-0E3A5D.svg)](https://www.aalto.fi/en/department-of-computer-science)
[![Supervisor: Dr. Azade Farshad](https://img.shields.io/badge/Supervisor-Dr.%20Azade%20Farshad-7C3AED.svg)](https://research.aalto.fi/en/persons/azade-farshad)
[![License: MIT](https://img.shields.io/badge/License-MIT-gray.svg)](LICENSE)

> **Doctoral Research Dossier & Open-Source 15-DOF Biomechanical Kinematics Engine**  
> **Applicant:** Iniyan Andrews Joseph  
> **Department:** Department of Computer Science, School of Science, Aalto University  
> **Affiliated Research Unit:** European Laboratory for Learning and Intelligent Systems (ELLIS) Institute Finland  
> **Proposed Primary Supervisor:** [Dr. Azade Farshad](https://research.aalto.fi/en/persons/azade-farshad) (Assistant Professor, Aalto University / PI, ELLIS Finland)

---

## 📄 Dedicated Links to Read & Download Application Documents

All application documents have been compiled and verified adhering strictly to Aalto University and ELLIS Institute formatting standards:

| Document | Scope | Read in Browser (Direct PDF) | Direct Download |
| :--- | :---: | :---: | :---: |
| **Comprehensive Research Proposal** | **14 pages** | [**Read Proposal PDF**](https://joeytribb.github.io/sign-language-kinematics/Bidirectional_PhD_Proposal_Aalto_ELLIS.pdf) | [⬇ Download](Bidirectional_PhD_Proposal_Aalto_ELLIS.pdf) |
| **Doctoral Motivation Letter** | **2 pages** | [**Read Motivation PDF**](https://joeytribb.github.io/sign-language-kinematics/Motivation_Letter.pdf) | [⬇ Download](Motivation_Letter.pdf) |
| **Academic Curriculum Vitae** | **2 pages** | [**Read CV PDF**](https://joeytribb.github.io/sign-language-kinematics/CV_Iniyan-Joseph_Aalto.pdf) | [⬇ Download](CV_Iniyan-Joseph_Aalto.pdf) |

---

## 🎮 Interactive 15-DOF Kinematics Engine (Live WebGL Prototype)

To empirically de-risk the research methodology and prove that physiological constraints eliminate neural hallucinations, we have developed and deployed an interactive 15-DOF WebGL kinematics engine:

👉 **[Launch Interactive 15-DOF 3D Hand Engine](https://joeytribb.github.io/sign-language-kinematics/04_Procedural_Engine_PoC/anatomical_finger.html)**

* **15-DOF True 3-Phalanx Hand Anatomy:** Metacarpophalangeal (MCP flex/abd), Proximal Interphalangeal (PIP), and Distal Interphalangeal (DIP) joints with thenar/hypothenar muscular pads.
* **Closed-Form Analytical IK in $\mathcal{O}(1)$ Time:** Compiles symbolic phonemes into deterministic 3D hand postures without numerical drift.
* **ASL Alphabet Playground (A–Z) with Ground-Truth Reference Photos:** Click any letter in the UI to see real-time side-by-side verification between the biological human sign photo and the 3D procedural kinematics solver.
* **Biomechanical Strain/Pain Optimization:** Quartic penalty objective $P_{\text{strain}}(\boldsymbol{\theta})$ ensuring least physical resistance and preventing joint hyperextensions.
* **Generative Out-of-Vocabulary (OOV) Fallback:** Evaluated on novel concepts (e.g., `'CakePop'`), autonomously emitting procedural tokens (`idx: CURVED`, `mid: CLOSED`, `pnk: EXTENDED_SPREAD_R`, `thm: THM_PINCH_INDEX`).

---

## 💡 Executive Abstract & Core Scientific Principle

Continuous sign language processing is not a generic video classification or 2D image synthesis problem—it is a **continuous trajectory control problem operating on an articulated 3D kinematic skeleton, governed by a discrete spatial grammar**. 

Existing black-box neural approaches fail because:
1. **Generative Models (SLP):** Suffer from unconstrained Euclidean diffusion drift, stretching bone lengths ("rubber fingers") and smearing millimeter-scale minimal pairs (e.g., confusing `MOTHER` at the chin with `FATHER` at the forehead).
2. **Perceptual Translators (SLT):** Suffer from *Spatial State Collapse*, where temporal sliding windows discard past 3D reference loci, breaking directional verb agreement (`VISIT`, `INVITE`).

### Functional Decoupling: "Brain vs. Muscles"

```
[FORWARD PRODUCTION PASS: Text-to-Sign (SLP)]
Spoken Text ──► [Spatial-SignLLM @ 1-2 Hz] ──► [15-DOF Biomechanical IK] ──► [Manifold Residual Diffusion] ──► 3D Avatar
                     (The Brain)                    (The Skeleton)                    (The Muscles)
                     Emits JSON plan                Closed-form math O(1)             Pi_M(P_hat + DeltaX)
                     & 3D spatial loci              Law of Cosines arm IK             Zero bone-stretching

[BACKWARD TRANSLATION PASS: Sign-to-Text (SLT)]
Signing Video ──► [15-DOF Tracking (HaMeR)] ──► [Raycasting & Memory M_t] ──► [Spatial-SignLLM Translation] ──► Spoken Text
                     Hand/Gaze Articulators         O(1) External Register            Decodes text via
                     Sternum Normalized             Deictic Parity P_deictic          Thematic theta-roles
```

1. **The Brain (Spatial-SignLLM @ 1--2 Hz):** An autoregressive multimodal foundation model operating on a unified vocabulary $\mathcal{V}_{\text{total}} = \mathcal{V}_{\text{text}} \cup \mathcal{V}_{\text{phono}} \cup \mathcal{V}_{\text{spatial}}$.
2. **The Skeleton (Stage 2 Kinematics @ 60 Hz):** Analytical 2-bone arm IK with circular humeral swivel orbits and 15-DOF hand kinematics running deterministically in $\mathcal{O}(1)$ time ($<0.5$\,ms).
3. **The Muscles (Stage 3 Manifold Diffusion @ 60 Hz):** Lightweight residual diffusion synthesizing biological momentum and micro-coarticulation atop the rigid scaffold: $\mathbf{X}_{\text{final}} = \Pi_{\mathcal{M}}(\mathbf{\hat{P}} + \Delta\mathbf{X}_\theta)$.
4. **Decoupled Causal Spatial Memory ($M_t$):** An external $\mathcal{O}(1)$ stateful register decoupled from the LLM context window, maintaining active referents and applying the **Deictic Perspective Parity Operator** ($\mathbf{P}_{\text{deictic}} = \text{diag}(-1, 1, 1)$) to resolve 180° face-to-face mirror orientation.

---

## 🤝 Target Lab Synergy: Dr. Azade Farshad (Aalto & ELLIS Finland)

This doctoral research directly integrates and expands upon pioneering geometric deep learning frameworks from **Dr. Azade Farshad's** group:
* **Topologically Constrained Generative Modeling (Extending *SCOPE* & *HieraSurg*):** Dr. Farshad established that biological structures require explicit graph-based continuity regularizers. We translate these Riemannian graph constraints to high-DOF articulated skeletal trees to guarantee bone-length invariance ($\mathcal{L}_{\text{graph}}$) and biological pain envelopes ($P_{\text{strain}}$).
* **Semantic Scene-Graph Conditioning (Extending *SceneGenie*):** We formulate 3D spatial discourse as an evolving scene graph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$, conditioning the residual diffusion denoiser. In reverse, scene graphs ground physical room objects to disambiguate pointing classifiers.
* **ELLIS Priority "AI for Health & Assistive Digital Twins":** Grounded in the WHO definition of health as complete physical, mental, and social well-being, this system serves as an Assistive Communication Digital Twin to dismantle systemic communication barriers for Deaf individuals in healthcare and daily life.

---

## 🚀 Running the Prototype Locally

```bash
git clone https://github.com/Joeytribb/sign-language-kinematics.git
cd sign-language-kinematics
python -m http.server 8000
```
Then open in browser:
```text
http://localhost:8000/04_Procedural_Engine_PoC/anatomical_finger.html
```

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
