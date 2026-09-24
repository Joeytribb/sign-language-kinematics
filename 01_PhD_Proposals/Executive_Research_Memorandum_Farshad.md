# Executive Research Memorandum

**To:** Dr. Azade Farshad, Assistant Professor & PI  
*Department of Computer Science, Aalto University & ELLIS Institute Finland*  
**From:** Iniyan Andrews Joseph  
*Applicant, ELLIS Institute Finland Doctoral Recruitment Call 2026*  
**Subject:** Resolving Topological Minimal-Pair Collapse in Continuous Sign Language Digital Twins via Biomechanical Invariants  
**Interactive Proof of Concept:** [joeytribb.github.io/sign-language-kinematics](https://joeytribb.github.io/sign-language-kinematics/)  
**Date:** September 2026  

---

### 1. The Core Scientific Bottleneck: Unconstrained Generative Failure
In continuous sign language processing, minimal pairs (lexical tokens distinguished solely by millimeter-scale shifts in handshape, orientation, or body contact loci) differ by less than $1.5\text{ cm}$.

Contemporary end-to-end generative models (unconstrained diffusion transformers and implicit motion predictors) fundamentally fail at this resolution. Without explicit geometric and anatomical inductive biases, unconstrained neural predictors exhibit **severe dynamic bone length deformation** (rubber-band humerus/forearm stretching), glenohumeral and elbow joint dislocations, and spatial state collapse under streaming translation windows. This smearing obliterates semantic distinctions, rendering synthetic signing grammatically unreadable to native Deaf signers.

---

### 2. Our De-Risked Breakthrough: Topologically Constrained Kinematics
To eliminate this failure mode, we have formulated and open-sourced an embodied biomechanical digital twin engineered from first principles:

1. **Analytical Circle Swivel Invariance:** Rather than relying on unconstrained Cartesian coordinate regression or post-hoc heuristic clamping, we parameterize upper-limb 2-bone kinematics over the Riemannian swivel circle manifold. The elbow position $\mathbf{E}(\psi)$ is solved analytically:
   $$\|\mathbf{E}(\psi) - \mathbf{S}\| \equiv 16.500\text{ cm}, \quad \|\mathbf{W}_{\text{eff}} - \mathbf{E}(\psi)\| \equiv 13.500\text{ cm}, \quad \Delta \equiv 0.000$$
   guaranteeing 100% rigid bone length invariance identically to machine precision across all poses.
2. **Effector-to-Locus Contact Kinematics:** Target wrist positions are dynamically offset by the inverse rotation of the active anatomical feature ($\mathbf{P}_{\text{wrist}} = \mathbf{P}_{\text{locus}} - \mathbf{R}_{\text{wrist}} \cdot \mathbf{p}_{\text{effector}}$), placing distal fingertip pads, thumb tips, and fist heels onto 24 calibrated 3D loci hovering 5–8 cm in front of the body surface without skeletal collisions.
3. **Interactive 60 FPS WebGL Implementation:** The full 30-articulated-joint synthesizer—encased in translucent muscle volumes with inner cortical bones visible—runs client-side at 60 FPS with zero external dependencies ([Live Demonstration](https://joeytribb.github.io/sign-language-kinematics/)). An embedded scientific ablation toggle directly demonstrates the severe failure modes of unconstrained baselines versus our invariant twin.

---

### 3. Direct Alignment with Your Research Agenda at Aalto & ELLIS
Your recent work on **topological continuity preservation, inference-time scene-graph guidance, and hierarchy-aware diffusion** underscores that unconstrained black-box deep learning cannot achieve safety or physical authenticity without structured inductive biases. 

Our Sign Language Kinematics framework extends your core paradigms into embodied communication:
- **Topological Continuity Preservation (Extending *SCOPE*, MICCAI 2023):** Just as SCOPE enforces topological and centerline continuity in biological branching structures, we enforce exact skeletal graph connectivity ($\mathcal{L}_{\text{graph}}$) and physiological strain compliance on 30-joint articulated hands, eliminating severed phalanges and rubber-finger artifacts.
- **Inference-Time Scene Graph & Bounding Guidance (Extending *SceneGenie*, ICCV 2023):** Sign discourse syntax operates as an evolving 3D scene graph $\mathcal{G} = (\mathcal{V}_{\text{loci}}, \mathcal{E}_{\text{predicates}})$. We adapt SceneGenie's training-free augmented bounding guidance ($\nabla \mathcal{L}_{\text{aug,boxg}}$) to steer hand effectors toward 3D anatomical contact loci ($R$-loci) during reverse diffusion sampling, while grounding physical room objects in deictic pointing.
- **Hierarchy-Aware Multimodal Diffusion (Extending *HieraSurg*, 2025):** We translate HieraSurg's two-stage hierarchical paradigm (coarse structural maps from high-level procedural states $\to$ continuous fine-grained video) into our Dual-Rate Streaming Architecture: discrete phonological macro-tokens $\mathcal{S}$ at 1–2 Hz establish coarse kinematic targets, which condition 60 Hz continuous residual motion diffusion.
- **AI for Health & Assistive Digital Twins (ELLIS Finland Priority):** Framing sign language generation not as mere animation, but as an essential assistive digital twin bridging 70 million Deaf individuals with healthcare and civic institutions under WHO guidelines.

---

### 4. Computational Execution & The Finnish Societal Moat
This 4-year doctoral research program is tailored for execution within the Finnish scientific ecosystem:
- **Supercomputing Infrastructure:** Scaled on **EuroHPC LUMI (AMD MI250X)** at CSC Kajaani, training adapted multimodal foundation cores (Llama 3.1 8B) on web-scale continuous signing datasets.
- **Participatory Co-Design:** Grounded under **Finland's Sign Language Act (*Viittomakielilaki 359/2015*)** in direct research partnership with the **Finnish Association of the Deaf (*Kuurojen Liitto ry*)**, ensuring ethical community data stewardship and native signer evaluation.

---

### 5. Invitation for a 15-Minute Technical Demonstration
I have prepared the complete application dossier, including a 14-page peer-reviewed technical proposal, curriculum vitae, and motivation letter. 

I would welcome the opportunity for a brief 15-minute private technical demonstration and code walkthrough to discuss how this foundational digital twin framework can contribute to your lab's research goals and grant deliverables at Aalto University and ELLIS Institute Finland.

**Dossier & Engine:** [https://joeytribb.github.io/sign-language-kinematics/](https://joeytribb.github.io/sign-language-kinematics/)  
**Direct Contact:** iniyandrews@gmail.com | [linkedin.com/in/iniyandrews](https://www.linkedin.com/in/iniyandrews)
