// ─── Edit everything here. Components read from this file. ───

export const profile = {
  name: "Vikhyath Reddy",
  fullName: "Kakanuru Shiva Vikhyath Reddy",
  role: "Computer Science Engineering",
  tagline: "Building AI systems that run close to the machine — local-first agents, distributed pipelines, and the infrastructure underneath them.",
  github: "https://github.com/ksvikhyath",
  githubHandle: "ksvikhyath",
  linkedin: "https://www.linkedin.com/in/shiva-vikhyath-reddy-kakanuru/",
  email: "ksvikhyath@gmail.com",
  resumeUrl: "/resume.pdf", // replace public/resume.pdf with your real file
};

export const about = [
  "I'm a Computer Science undergraduate at PES University, mostly found somewhere between model weights and system logs.",
  "Most of what I build tries to answer one question: how much can run locally, privately, and fast, before you need the cloud at all. That's shown up as an on-device AI assistant, a fine-tuned LLM, and a Kafka pipeline processing metrics in real time.",
  "Outside of that — cricket on weekends, and an unreasonable amount of Sudoku.",
];

export const techStack = [
  { label: "Languages", items: ["Python", "C", "C++"] },
  { label: "AI / ML", items: ["PyTorch", "TensorFlow", "Transformers", "OpenCV", "Ollama", "LangGraph"] },
  { label: "Distributed Systems", items: ["Kafka", "Spark", "ZeroTier"] },
  { label: "Databases", items: ["Neo4j", "SQLite", "MongoDB"] },
  { label: "Tools", items: ["Git", "Linux", "FastAPI", "MCP", "Docker"] },
];

export const projects = [
  {
    id: "orbixai",
    icon: "◍",
    name: "OrbixAI",
    tag: "Capstone Project",
    date: "June 2026",
    description:
      "A privacy-first personal AI assistant that runs entirely on-device. A fine-tuned local LLM converts natural-language requests into structured tool calls without sending user data to the cloud.",
    highlights: [
      "Dual-memory system combining Neo4j and SQLite for personalized, context-aware responses across sessions",
      "Local multi-model ensemble (Qwen 2.5 + Phi-4 Mini) orchestrated with LangGraph",
      "Google OAuth, Whisper voice input, and Amadeus API for real-world travel data",
    ],
    stat: { value: "100%", label: "on-device" },
    stack: ["Python", "FastAPI", "LangGraph", "Llama-3", "Ollama", "Neo4j", "SQLite", "MCP", "Whisper"],
    github: "",
    caseStudy: "",
  },
  {
    id: "leafwise",
    icon: "🌿",
    name: "LeafWise",
    tag: "Published Research · IEEE INDICON 2025",
    date: "June 2025",
    description:
      "A multimodal deep learning framework for classifying medicinal plant leaves — CNNs for image features, Transformer-based models for text features, combined with late fusion.",
    highlights: [
      "Late fusion of visual and textual modalities improved classification accuracy and robustness",
      "Published as \"A Multimodal Explainable AI Framework for Classification of Indian Medicinal Leaves Using Transformer and CNN-Based Architectures\"",
    ],
    stat: { value: "99.52%", label: "accuracy" },
    stack: ["PyTorch", "TensorFlow", "OpenCV", "scikit-learn", "Transformers"],
    github: "https://github.com/nh-44/LeafWise",
    caseStudy: "",
  },
  {
    id: "distributed-pipeline",
    icon: "▲",
    name: "Real-Time Distributed Image Processing",
    tag: "Systems Project",
    date: "November 2025",
    description:
      "A real-time distributed pipeline streaming live server metrics — CPU, memory, disk, network I/O — processed with Spark window-based aggregations for anomaly detection.",
    highlights: [
      "Multi-node producers and consumers deployed over ZeroTier for secure inter-machine communication",
      "Windowed aggregation in Spark for near-real-time anomaly detection",
    ],
    stat: { value: "Multi-node", label: "pipeline" },
    stack: ["Kafka", "Spark", "ZeroTier"],
    github: "",
    caseStudy: "",
  },
  {
    id: "skillgraph",
    icon: "⌗",
    name: "SkillGraph",
    tag: "Developer Skill Intelligence & Job Matching Platform",
    date: "2026",
    description:
      "Paste a resume and a job post — SkillGraph checks what you claim against what your GitHub actually shows, scores the match, ranks the highest-impact gaps, and recommends one project sized to close them. No accounts, no database, each analysis is a single stateless request.",
    highlights: [
      "Deterministic skill extraction and scoring engine (keyword/alias matching, weighted by where each requirement appears in the job post) — no external calls needed to run",
      "Pulls public GitHub evidence (languages, Dockerfiles, CI configs, tests) to verify resume claims instead of taking them at face value",
      "Optional Gemini integration writes the roadmap's project description; falls back to built-in templates without an API key",
    ],
    stat: { value: "Stateless", label: "no DB" },
    stack: ["Next.js 14", "TypeScript", "Tailwind", "Gemini API"],
    github: "https://github.com/ksvikhyath/skillgraph",
    caseStudy: "https://skillgraph-phi.vercel.app",
  },
];

export const education = [
  {
    school: "PES University",
    detail: "Bachelor of Technology in Computer Science Engineering",
    meta: "GPA 8.43",
    period: "2023 — 2027",
  },
  {
    school: "Narayana PU College",
    detail: "PCMC (PU +1, +2)",
    meta: "92%",
    period: "2021 — 2023",
  },
  {
    school: "PSBB Learning Leadership Academy",
    detail: "CBSE",
    meta: "82%",
    period: "2021",
  },
];

export const awards = [
  "Prof CNR Rao Merit Scholarship — Sem 3 and 4",
  "Distinction Award — Sem 1, 2 and 5",
];

export const publications = [
  {
    citation:
      "K. S. Vikhyath Reddy et al., \"A Multimodal Explainable AI Framework for Classification of Indian Medicinal Leaves Using Transformer and CNN-Based Architectures\", IEEE INDICON 2025.",
  },
];

export const terminalLines = [
  { prompt: "whoami" },
  { output: "vikhyath — computer science undergraduate @ pes university" },
  { prompt: "cat interests.txt" },
  { output: "→ artificial intelligence" },
  { output: "→ backend engineering" },
  { output: "→ distributed systems" },
  { output: "→ developer tools" },
  { prompt: "cat currently.txt" },
  { output: "→ building on-device ai agents" },
  { output: "→ exploring mcp + local llms" },
  { output: "→ learning distributed systems engineering" },
];
