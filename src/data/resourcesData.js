export const RESOURCES_DATA = [
  // 📄 Papers
  {
    id: "attention-is-all-you-need",
    title: "Attention Is All You Need",
    desc: "The foundational Transformer architecture paper replacing recurrent models with self-attention mechanisms.",
    category: "papers",
    meta: "Vaswani et al. · 2017",
    link: "https://arxiv.org/abs/1706.03762",
  },
  {
    id: "vllm-paged-attention",
    title: "vLLM: Fast & Cheap LLM Serving with PagedAttention",
    desc: "High-throughput KV cache management algorithm inspired by virtual memory paging in operating systems.",
    category: "papers",
    meta: "Kwon et al. · 2023",
    link: "https://arxiv.org/abs/2309.06180",
  },
  {
    id: "lora-low-rank-adaptation",
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    desc: "Freezes pre-trained model weights and injects trainable rank decomposition matrices for efficient fine-tuning.",
    category: "papers",
    meta: "Hu et al. · 2021",
    link: "https://arxiv.org/abs/2106.09685",
  },
  {
    id: "ragas-eval",
    title: "RAGAS: Automated Evaluation of Retrieval Augmented Generation",
    desc: "Framework for reference-free evaluation of RAG pipelines across faithfulness and answer relevance.",
    category: "papers",
    meta: "Es et al. · 2023",
    link: "https://arxiv.org/abs/2309.15217",
  },

  // 🎥 Videos / Lectures
  {
    id: "karpathy-zero-to-hero",
    title: "Neural Networks: Zero to Hero",
    desc: "A masterclass series building micrograd, makemore, and GPT from scratch in Python and PyTorch.",
    category: "videos",
    meta: "Andrej Karpathy · 2023",
    link: "https://www.youtube.com/playlist?list=SLA1I8R0p-R3s0XN7o94L4",
  },
  {
    id: "karpathy-intro-to-llms",
    title: "Intro to Large Language Models",
    desc: "A 1-hour high-level overview of LLM training, fine-tuning, RLHF, and future AI capabilities.",
    category: "videos",
    meta: "Andrej Karpathy · 2023",
    link: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
  },
  {
    id: "stanford-cs224n",
    title: "Stanford CS224N: NLP with Deep Learning",
    desc: "Comprehensive Stanford lecture series covering word vectors, attention, transformers, and prompt engineering.",
    category: "videos",
    meta: "Stanford University · 2023",
    link: "https://www.youtube.com/playlist?list=PLoROMvodv4rOSH4v6133s9lfKTAT_j25z",
  },

  // ✍️ Articles / Blogs
  {
    id: "lilian-weng-autonomous-agents",
    title: "LLM Powered Autonomous Agents",
    desc: "In-depth breakdown of LLM agent architectures combining memory, planning tools, and task decomposition.",
    category: "blogs",
    meta: "Lilian Weng (OpenAI) · 2023",
    link: "https://lilianweng.github.io/posts/2023-06-23-agent/",
  },
  {
    id: "jalammar-illustrated-transformer",
    title: "The Illustrated Transformer",
    desc: "A famous visual step-by-step guide explaining self-attention, positional encoding, and transformer layers.",
    category: "blogs",
    meta: "Jay Alammar · 2018",
    link: "https://jalammar.github.io/illustrated-transformer/",
  },
  {
    id: "chip-huyen-evals",
    title: "Building LLM Applications for Production",
    desc: "Practical engineering guide covering prompt engineering, RAG, fine-tuning, and evaluation tradeoffs.",
    category: "blogs",
    meta: "Chip Huyen · 2023",
    link: "https://huyenchip.com/2023/04/11/llm-engineering.html",
  },
];