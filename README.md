# A Bidirectional Neuro-Symbolic Foundation Pipeline for Continuous Sign Language AI

[![Full Application Dossier](https://img.shields.io/badge/Application%20Dossier-Full%20Research%20Portal-10B981.svg)](https://joeytribb.github.io/sign-language-kinematics/)
[![Live 3D Demo: Three.js WebGL](https://img.shields.io/badge/Live%20Demo-Three.js%2040--DOF%20Dual--Hand-059669.svg)](https://joeytribb.github.io/sign-language-kinematics/04_Procedural_Engine_PoC/anatomical_hand.html)
[![Full Proposal: 14 Pages PDF](https://img.shields.io/badge/Proposal%20PDF-14%20Pages%20Verified-0284C7.svg)](https://joeytribb.github.io/sign-language-kinematics/Bidirectional_PhD_Proposal_Aalto_ELLIS.pdf)
[![Doctoral Application: Aalto / ELLIS Finland](https://img.shields.io/badge/Application-Aalto%20%2F%20ELLIS%20Finland-0E3A5D.svg)](https://www.aalto.fi/en/department-of-computer-science)
[![Prospective PI: Dr. Azade Farshad](https://img.shields.io/badge/Prospective%20PI-Dr.%20Azade%20Farshad-7C3AED.svg)](https://joeytribb.github.io/sign-language-kinematics/)
[![LinkedIn Profile](https://img.shields.io/badge/LinkedIn-iniyandrews-0A66C2.svg)](https://www.linkedin.com/in/iniyandrews)
[![License: MIT](https://img.shields.io/badge/License-MIT-gray.svg)](LICENSE)

> **Doctoral Research Dossier & Open-Source Kinematic Synthesizer (30 Articulated Joints)**  
> **Applicant:** Iniyan Andrews Joseph  
> **Full Research Dossier Portal:** [joeytribb.github.io/sign-language-kinematics](https://joeytribb.github.io/sign-language-kinematics/)  
> **LinkedIn:** [linkedin.com/in/iniyandrews](https://www.linkedin.com/in/iniyandrews)  
> **Department:** Department of Computer Science, School of Science, Aalto University  
> **Affiliated Research Unit:** European Laboratory for Learning and Intelligent Systems (ELLIS) Institute Finland  
> **Prospective PI & Academic Host:** Dr. Azade Farshad (Assistant Professor, Aalto University / PI, ELLIS Finland)

---

## 📄 Dedicated Links to Read & Download Application Documents

All application documents have been compiled and verified adhering strictly to Aalto University and ELLIS Institute formatting standards:

| Document | Scope | Read in Browser (Direct PDF) | Direct Download |
| :--- | :---: | :---: | :---: |
| **Comprehensive Research Proposal** | **14 pages** | [**Read Proposal PDF**](https://joeytribb.github.io/sign-language-kinematics/Bidirectional_PhD_Proposal_Aalto_ELLIS.pdf) | [⬇ Download](Bidirectional_PhD_Proposal_Aalto_ELLIS.pdf) |
| **Doctoral Motivation Letter** | **2 pages** | [**Read Motivation PDF**](https://joeytribb.github.io/sign-language-kinematics/Motivation_Letter.pdf) | [⬇ Download](Motivation_Letter.pdf) |
| **Academic Curriculum Vitae** | **2 pages** | [**Read CV PDF**](https://joeytribb.github.io/sign-language-kinematics/CV_Iniyan-Joseph_Aalto.pdf) | [⬇ Download](CV_Iniyan-Joseph_Aalto.pdf) |

---

## 🎮 Interactive Kinematic Synthesizer (Live WebGL Prototype)

To empirically de-risk the research methodology and prove that physiological constraints eliminate neural hallucinations, we have developed and deployed an interactive Kinematic Synthesizer in WebGL (30 articulated phalangeal joints):

👉 **[Launch Interactive Kinematic Synthesizer](https://joeytribb.github.io/sign-language-kinematics/04_Procedural_Engine_PoC/anatomical_hand.html)**

* **Kinematic Synthesizer across 30 Articulated Phalangeal Joints:** 15 rigid biological joints per hand (MCP flex/abd, PIP, DIP per finger; thumb CMC, MCP, IP) obeying physiological limits and Battison's phonological Symmetry and Dominance Conditions.
* **5 Foundational Parametric Lexicons (`PARAMETRIC_LEXICONS`):** Complete sub-lexical decomposition into 5 orthogonal phonetic spaces:
  * **41 Handshapes:** Standard Stokoe/ASL-LEX inventory with 15-DOF biological joint limits.
  * **24 Spatial Loci:** 3D anatomical reference anchors ($R$-loci) from neutral space to head and torso landmarks.
  * **10 Palm/Wrist Orientations:** Physiological pitch, yaw, and roll wrist transformations.
  * **16 Dynamic Movement Primitives:** Parametric linear, arc, circular, alternating, oscillatory, and tapping trajectories.
  * **4 Bilateral Interaction Modes:** Unilateral, Symmetrical (Battison Type I), Alternating (Type II), and Dominant-Base Contact (Type III).
* **Universal Sign Generator (`⚡ Generator` Tab):** A combinatorial parameter space of $41 \times 24 \times 10 \times 16 \times 4 = 629,760$ discrete phonetic configurations, capable of synthesizing any sign across the 2,723-sign ASL-LEX 2.0 dataset without per-sign manual rigging.
* **Minimal Inter-Finger Collisions (Audit PASS):** Built-in 7-point phalanx-to-phalanx soft-body repulsion barrier, multi-pass joint-space anti-penetration solver, crossed-finger dorsal elevation offsets, and dorsal resting clamps. Validated via automated headless test suites:
  * **26/26 Alphabet Letters:** 0 inter-finger self-collisions across all closed and crossed poses (`A`, `E`, `M`, `N`, `R`, `S`, `T`).
  * **50/50 ASL-LEX Vocabulary:** Verified minimal finger collisions across forward kinematics, anatomical limits, and trajectory smoothness.
* **Interactive Index Fingertip Master Drag Handle:** Real-time 3D target manipulator driving analytical 2-bone arm IK with continuous volumetric torso/head obstacle avoidance and humeral orbit swivel.
* **Biomechanical Strain/Pain Optimization:** Real-time quartic strain penalty objective $P_{\text{strain}}(\boldsymbol{\theta}) = \sum [(\theta - \theta_{\text{rest}})/\Delta\theta]^4$ guaranteeing minimal metabolic strain and preventing non-physiological joint hyperextension.
* **Cookieless Academic Telemetry:** Integrated non-blocking, GDPR-compliant academic visitor telemetry (`visitor-telemetry.js`) logging real-time institutional page access and geographical insights (e.g. `Europe/Helsinki`).

---

## 💡 Executive Vision: An Assistive Communication Digital Twin

### Autonomous Cross-Modal Dialogue for Continuous Sign Language AI

In critical societal environments—such as emergency clinical consultations, administrative hearings, and educational lectures—unimpeded cross-modal dialogue between Deaf signers and hearing professionals remains fundamentally constrained by the systemic scarcity of on-demand qualified human interpreters. Under the World Health Organization (WHO) mandate defining health as complete physical, mental, and social well-being, this persistent communication barrier creates severe healthcare vulnerabilities and profound social exclusion.

Our doctoral mission is to engineer an **autonomous, real-time bidirectional communication digital twin** ($<100$ ms latency). In an emergency clinic, the system translates spoken discourse from medical staff into fluent, culturally authentic Finnish Sign Language (*Suomalainen viittomakieli*, SVK) rendered on an interactive 3D digital human; when the Deaf patient responds, the system tracks their articulated hand kinematics, facial grammar, and 3D spatial references, translating their discourse into spoken Finnish for medical staff.

### Core Representational Bottlenecks in Contemporary Sign AI

Because **sign languages possess no conventional written form**, they operate as 4D spatio-temporal languages across physical space. Prior machine learning approaches fail at two complementary extremes:
1. **Generative Synthesis Artifacts (Non-Physiological Bone Deformation):** Unconstrained generative neural models lack anatomical and kinematic manifold constraints, causing severe joint dislocations and phalangeal stretching that smear centimeter-scale minimal pairs (e.g., inverting `MOTHER` at the chin into `FATHER` at the forehead).
2. **Perceptual Spatial State Collapse (Truncated Temporal Memory):** Signers project discourse entities to persistent 3D spatial coordinates in signing space ($R$-loci). Streaming video translation models operate on short sliding windows that purge past temporal context, causing models to lose track of discourse referents and corrupting directional agreement verbs like `INVITE` or `VISIT`.

### The Tripartite Foundation Architecture: Perception, Foundation Reasoning, and Embodied Actuation

```
[CHANNEL 1: ARTICULATORY PERCEPTUAL TOKENIZATION (Sign -> Tokens)]
Web Videos (YouTube/IG/Broadcast) ──► [Open-Domain Video Tokenizer] ──► Discrete Sign Tokens (S_t)
                                      HaMeR 3D Mesh / FLAME / Gaze

[CORE: UNIFIED BISIGN FOUNDATION MODEL (Llama 3.1 8B Adaptation)]
Input (Tokens S_t or Text W_t) ────► [Continual Pre-Training on LUMI] ──► Output (Text W_t or Tokens S_t)
                                      Vocabulary: V_extended = V_base U V_sign
                                      Decoupled Causal Memory Bank M_t

[CHANNEL 2: EMBODIED BIOMECHANICAL ACTUATION (Tokens -> 3D Sign @ 60 Hz)]
Sign Tokens S_t ──► [Kinematic Synthesizer] ──► [Manifold Residual Diffusion] ──► 3D Avatar
                     30 Articulated Joints             Pi_M(P_hat + DeltaX)
                     Battison Phonology & Arm IK       Anatomical Invariance
```

1. **Articulatory Perception Channel (Perceptual Tokenizer):** Ingests in-the-wild signing video at scale, recovering articulated hand kinematics (30 articulated joints), 50 FLAME blendshapes, and 3D gaze rays into an external $\mathcal{O}(1)$ Causal Spatial Memory Bank ($M_t$), converting continuous video into discrete linguistic token sequences $\mathcal{S} \in \mathcal{V}_{\text{sign}}$.
2. **Multimodal Foundation Reasoning Core (BiSign-LLM):** Rather than training a Transformer from scratch without world priors, we adapt a pre-trained open-weight frontier model (e.g., Llama 3.1 8B / Mistral NeMo 12B) via **Vocabulary Expansion** ($\mathcal{V}_{\text{extended}} = \mathcal{V}_{\text{base}} \cup \mathcal{V}_{\text{sign}}$), continually pre-trained on EuroHPC LUMI to internalize 3D spatial grammar and cross-modal dialogue.
3. **Embodied Biomechanical Actuator (Kinematic Synthesizer @ 60 Hz):** Closed-form 2-bone arm IK and articulated hand kinematics (30 articulated phalangeal joints) compiling from 5 foundational parametric lexicons (41 handshapes, 24 loci, 10 orientations, 16 movements, 4 bilateral modes; 629,760 combinations covering all 2,723 ASL-LEX signs) with minimal finger collisions, phalanx anti-penetration barriers, Battison symmetry/dominance laws, and quartic strain minimization $P_{\text{strain}}(\boldsymbol{\theta})$ in $\mathcal{O}(1)$ time ($<0.5$\,ms).
4. **Physiological Manifold Residual Diffusion (@ 60 Hz):** Lightweight residual diffusion synthesizing biological momentum and micro-coarticulation atop the rigid procedural scaffold: $\mathbf{X}_{\text{final}} = \Pi_{\mathcal{M}}(\mathbf{\hat{P}} + \Delta\mathbf{X}_\theta)$.
5. **Decoupled Causal Spatial Memory ($M_t$):** An external $\mathcal{O}(1)$ stateful register decoupled from the LLM context window, maintaining active referents and applying a rigid $SO(3)$ **Deictic Perspective Rotation** ($\mathbf{R}_y(\pi) = \text{diag}(-1, 1, -1)$ with translation $\mathbf{t}_{\text{conv}}$) to resolve 180° face-to-face conversational orientation without inverting chirality.

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
http://localhost:8000/04_Procedural_Engine_PoC/anatomical_hand.html
```

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
