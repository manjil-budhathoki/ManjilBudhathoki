export const CASE_STUDIES = {
  "production-rag": {
    id: "production-rag",
    title: "Production RAG Engine",
    subtitle: "Enterprise Retrieval-Augmented Generation with RBAC & RAGAS Evaluation Metrics.",
    category: "AI Infrastructure",
    timeline: "3 Months",
    role: "Lead ML Engineer",
    tags: ["PyTorch", "vLLM", "Qdrant", "RAGAS", "FastAPI", "Docker"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    overview: "Built an enterprise-grade Retrieval-Augmented Generation (RAG) pipeline handling over 500,000 internal documents with role-based access control (RBAC), hybrid multi-vector search, and automated hallucination benchmarks.",
    problem: "Naive RAG approaches suffered from high retrieval latency (>800ms) and context hallucinations, failing enterprise compliance due to missing document-level security.",
    metrics: [
      { label: "P99 Retrieval Latency", value: "< 35ms" },
      { label: "Answer Relevance", value: "96.4%" },
      { label: "Context Recall", value: "98.1%" },
      { label: "GPU Memory Saved", value: "70%" },
    ],
    milestones: [
      { phase: "Phase 01", title: "Data Ingestion & Chunking", desc: "Parsed 500k+ enterprise documents via Unstructured.io with binary quantization." },
      { phase: "Phase 02", title: "Hybrid Vector Search Index", desc: "Constructed Qdrant dense vector index combined with sparse BM25 reranking." },
      { phase: "Phase 03", title: "vLLM Inference Deployment", desc: "Deployed Llama 3 70B AWQ with PagedAttention under Kubernetes autoscaling." },
    ],
    architecture: [
      "Document Ingestion & Parsing via Unstructured.io & PyPDF",
      "Dense Embedding Generation via BGE-M3 + Product Quantization",
      "Hybrid Vector Search in Qdrant (Sparse BM25 + Dense Vectors)",
      "Cross-Encoder Reranking via BGE-Reranker-Large",
      "Low-Latency Model Serving with vLLM (Llama 3 70B AWQ)",
      "Continuous Evaluation Pipeline via RAGAS Metrics",
    ],
    codeSnippet: `// Hybrid Qdrant Vector Search with RBAC Filters
const searchResults = await qdrantClient.search("enterprise_docs", {
  vector: denseQueryEmbedding,
  filter: {
    must: [
      { key: "department", match: { value: user.department } },
      { key: "clearance_level", range: { lte: user.clearance } }
    ]
  },
  limit: 10,
});`,
  },
  "nlp-finetuning": {
    id: "nlp-finetuning",
    title: "NLP Fine-Tuning Pipeline",
    subtitle: "Domain-specific language model tuning & automated MLOps evaluation deployment.",
    category: "MLOps & LLMs",
    timeline: "2 Months",
    role: "AI Researcher",
    tags: ["Hugging Face", "PEFT", "LoRA", "DeepSpeed", "W&B", "PyTorch"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    overview: "Engineered an end-to-end LLM fine-tuning framework using QLoRA and DeepSpeed Stage 3, enabling multi-GPU domain alignment on financial datasets at 80% lower hardware cost.",
    problem: "General-purpose LLMs failed to extract precise structured financial entities without hallucinating numerical metrics.",
    metrics: [
      { label: "Training Speedup", value: "4.2x" },
      { label: "Model Accuracy", value: "94.8%" },
      { label: "VRAM Footprint", value: "-65%" },
      { label: "Eval Loss", value: "0.14" },
    ],
    milestones: [
      { phase: "Phase 01", title: "Dataset Deduplication", desc: "Cleaned and tokenized 1.2M domain-specific financial documents." },
      { phase: "Phase 02", title: "QLoRA Adapter Injection", desc: "Configured target linear projection layers for 4-bit k-bit training." },
      { phase: "Phase 03", title: "DeepSpeed Multi-GPU Training", desc: "Distributed training across 4x A100 GPUs with Weights & Biases telemetry." },
    ],
    architecture: [
      "Custom Dataset Tokenization & Deduplication",
      "4-bit Quantization via BitsAndBytes & QLoRA Adapters",
      "Distributed Multi-GPU Training via PyTorch DeepSpeed",
      "Automated Experiment Tracking with Weights & Biases",
      "Adapter Merging & GGUF Quantization Export",
    ],
    codeSnippet: `# QLoRA Fine-Tuning Setup with PEFT
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training

peft_config = LoraConfig(
    r=16, lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05, bias="none",
    task_type="CAUSAL_LM"
)`,
  },
  "multi-agent-research": {
    id: "multi-agent-research",
    title: "Agentic Research Framework",
    subtitle: "LangGraph-based state machine for collaborative autonomous research agents.",
    category: "Autonomous Agents",
    timeline: "2 Months",
    role: "AI Systems Architect",
    tags: ["LangGraph", "Python", "Tavily AI", "FastAPI", "Pydantic"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    overview: "Developed a multi-agent orchestration framework where specialized agents (Researcher, Critic, Writer, Coder) collaborate via state graphs to produce verified technical reports.",
    problem: "Single-prompt agent setups suffered from infinite reasoning loops and unverified factual hallucination during long multi-step web searches.",
    metrics: [
      { label: "Fact Accuracy", value: "97.2%" },
      { label: "Task Completion", value: "99.1%" },
      { label: "Loop Prevention", value: "100%" },
      { label: "Average Execution", value: "12s" },
    ],
    milestones: [
      { phase: "Phase 01", title: "State Schema Design", desc: "Defined Pydantic schemas for deterministic inter-agent state passing." },
      { phase: "Phase 02", title: "Agent Node Implementation", desc: "Built Web Research Agent, Code Execution Agent, and Fact Critic Agent." },
      { phase: "Phase 03", title: "Human-in-the-Loop Interrupts", desc: "Added approval checkpoints before dangerous code execution steps." },
    ],
    architecture: [
      "Graph State Definition with Pydantic Schema Validation",
      "Search Agent with Tavily & Serper API Integration",
      "Reflection & Revision Loop with Critic Agent Node",
      "Human-in-the-Loop Approval Interruption State",
    ],
    codeSnippet: `# LangGraph State Machine Definition
from langgraph.graph import StateGraph, END

workflow = StateGraph(AgentState)
workflow.add_node("researcher", research_node)
workflow.add_node("critic", critic_node)
workflow.add_edge("researcher", "critic")
workflow.add_conditional_edges("critic", should_continue)`,
  },
  "voice-ai-memory": {
    id: "voice-ai-memory",
    title: "Voice AI OS with Persistent Memory",
    subtitle: "Real-time low-latency voice assistant with cross-session persistent memory.",
    category: "Real-time AI",
    timeline: "3 Months",
    role: "ML Engineer",
    tags: ["Whisper", "Letta", "MemGPT", "WebSockets", "ElevenLabs"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    overview: "Built a sub-500ms voice conversational assistant utilizing streaming STT/TTS pipelines and MemGPT-style tiered memory (Archival + Working memory).",
    problem: "Standard voice assistants forget user context between sessions and suffer from high latency (>2000ms) making natural conversation awkward.",
    metrics: [
      { label: "Voice Latency", value: "< 420ms" },
      { label: "Session Retention", value: "100%" },
      { label: "Streaming STT", value: "Whisper" },
      { label: "Memory DB", value: "MemGPT" },
    ],
    milestones: [
      { phase: "Phase 01", title: "WebSocket Streaming STT", desc: "Engineered full-duplex speech streaming using Faster-Whisper." },
      { phase: "Phase 02", title: "MemGPT Tiered Memory Integration", desc: "Connected Letta memory block for cross-session persona retention." },
      { phase: "Phase 03", title: "Sub-500ms Audio Pipeline", desc: "Optimized ElevenLabs WebSocket text-to-speech audio chunking." },
    ],
    architecture: [
      "Full-Duplex Audio Streaming via WebSockets",
      "Real-time Speech-to-Text via Faster-Whisper",
      "Tiered Memory Retrieval via Letta / MemGPT Core",
      "Low-Latency Speech Synthesis via ElevenLabs WebSockets",
    ],
    codeSnippet: `// WebSocket Audio Stream Handler
websocket.on("message", async (chunk) => {
  const text = await whisperStream.transcribe(chunk);
  const memoryContext = await memgpt.retrieveContext(text);
  const audioBuffer = await elevenLabsStream.generate(text, memoryContext);
  websocket.send(audioBuffer);
});`,
  },
  "multimodal-document-processor": {
    id: "multimodal-document-processor",
    title: "Multimodal Vision Core",
    subtitle: "Enterprise vision extraction validating complex structured outputs via Pydantic.",
    category: "Computer Vision & LLMs",
    timeline: "2 Months",
    role: "Computer Vision Engineer",
    tags: ["GPT-4o Vision", "Pydantic", "OpenCV", "FastAPI", "OCR"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    overview: "Built an intelligent document processing engine capable of parsing scanned invoices, handwritten tables, and complex technical schematics into strict Pydantic JSON schemas.",
    problem: "Traditional OCR tools (Tesseract) struggled with complex multi-column tables, rotated scans, and unstructured legal layouts.",
    metrics: [
      { label: "JSON Accuracy", value: "99.2%" },
      { label: "Processing Speed", value: "1.2s/pg" },
      { label: "OCR Hallucination", value: "< 0.3%" },
      { label: "Throughput", value: "50k pg/hr" },
    ],
    milestones: [
      { phase: "Phase 01", title: "OpenCV Bounding Normalization", desc: "Auto-deskewed and contrast-normalized scanned document images." },
      { phase: "Phase 02", title: "Vision Model Extraction", desc: "Prompt-engineered GPT-4o Vision for complex multi-column tables." },
      { phase: "Phase 03", title: "Pydantic Schema Guardrails", desc: "Guaranteed strict JSON output compliance with automatic retry logic." },
    ],
    architecture: [
      "Image Bounding-Box Normalization & Preprocessing with OpenCV",
      "Vision Language Model Processing via GPT-4 Vision & LLaVA",
      "Structured Output Guarantee via Pydantic Program Guardrails",
      "Async Batch Ingestion Queue with Celery & Redis",
    ],
    codeSnippet: `# Structured Vision Extraction Guardrail
class InvoiceData(BaseModel):
    vendor_name: str
    total_amount: float
    line_items: list[Item]

response = client.chat.completions.create(
    model="gpt-4o",
    response_format={"type": "json_object"},
    messages=[{"role": "user", "content": [image_payload]}]
)`,
  },
  "llm-inference-engine": {
    id: "llm-inference-engine",
    title: "vLLM Inference Engine",
    subtitle: "High-throughput quantized model serving pipeline with AWQ & PagedAttention.",
    category: "Inference Infrastructure",
    timeline: "2 Months",
    role: "LLM Infrastructure Engineer",
    tags: ["vLLM", "AWQ", "CUDA", "Triton", "Prometheus", "Kubernetes"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    overview: "Deployed a production vLLM inference cluster serving Llama 3 70B with AWQ 4-bit quantization, PagedAttention, and continuous batching under Kubernetes.",
    problem: "Unquantized 16-bit LLM deployments required expensive multi-node GPU instances with low token-per-second throughput under spike traffic.",
    metrics: [
      { label: "Token Throughput", value: "128 tok/s" },
      { label: "Cost Savings", value: "68%" },
      { label: "GPU Concurrency", value: "64 Users" },
      { label: "Uptime", value: "99.98%" },
    ],
    milestones: [
      { phase: "Phase 01", title: "AWQ 4-bit Quantization", desc: "Quantized Llama 3 70B weights maintaining 99% perplexity accuracy." },
      { phase: "Phase 02", title: "PagedAttention KV Optimization", desc: "Configured zero-fragmentation virtual memory allocation for KV cache." },
      { phase: "Phase 03", title: "Kubernetes Cluster Deployment", desc: "Configured autoscaling GPU pods with Prometheus telemetry monitoring." },
    ],
    architecture: [
      "AWQ 4-bit Model Weights Quantization",
      "PagedAttention KV Cache Optimization",
      "vLLM Engine Multi-GPU Tensor Parallelism",
      "Kubernetes Deployment with Autoscaling & Prometheus Metrics",
    ],
    codeSnippet: `# Launching vLLM Engine with AWQ Quantization
python3 -m vllm.entrypoints.openai.api_server \\
    --model meta-llama/Meta-Llama-3-70B-Instruct-AWQ \\
    --quantization awq \\
    --tensor-parallel-size 2 \\
    --max-model-len 8192`,
  },
};