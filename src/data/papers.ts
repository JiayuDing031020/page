export interface Paper {
  id: string;
  index: string;
  title: string;
  authors: string;
  venue: string;
  url?: string;
}

export const papers: Paper[] = [
  {
    id: "01",
    index: "[01]",
    title: "ExtrinSplat: Decoupling Geometry and Semantics for Open-Vocabulary Understanding in 3D Gaussian Splatting",
    authors: "Jiayu Ding, Xinpeng Liu, Zhiyi Pan, Shiqiang Long, Ge Li",
    venue: "CVPR 2026",
  },
  {
    id: "02",
    index: "[02]",
    title: "VideoCuRL: Video Curriculum Reinforcement Learning with Orthogonal Difficulty Decomposition",
    authors: "Hongbo Jin, Kuanwei Lin, Wenhao Zhang, Yichen Jin, Ge Li",
    venue: "ACL 2026",
    url: "https://arxiv.org/abs/2601.00887",
  },
  {
    id: "03",
    index: "[03]",
    title: "3D Scene Assertion Verification",
    authors: "Jun Lin*, Jiayu Ding*, Xiangtian Si, Xitong Cao, Lixin Hong, Zhang Chen, Chenxi Lv, Wenqian Wang",
    venue: "ICML 2026",
  },
  {
    id: "04",
    index: "[04]",
    title: "ZeroSplat: Generalized Referring Segmentation in 3D Gaussian Splatting",
    authors: "Jiayu Ding*, Meilu Song*, Xiaoyi Zhang, Hongbo Jin, Yichen Jin, Xiangtian Si",
    venue: "ECCV 2026",
  },
  {
    id: "05",
    index: "[05]",
    title: "HAT-KI: A Hierarchical Auxiliary Task framework with asymmetric Knowledge Injection for early rumor detection",
    authors: "Wenbo Xing, Yan Li, Zhiming Zhao",
    venue: "Information Processing & Management",
  },
  {
    id: "06",
    index: "[06]",
    title: "3D Instruction Ambiguity Detection",
    authors: "Jiayu Ding, Haoran Tang, Hongbo Jin, Wei Gao, Ge Li",
    venue: "Preprint 2026",
    url: "https://arxiv.org/abs/2601.05991",
  },
  {
    id: "07",
    index: "[07]",
    title: "TIR-Flow: Active Video Search and Reasoning with Frozen VLMs",
    authors: "Hongbo Jin*, Siyi Xie*, Jiayu Ding*, Kuanwei Lin, Ge Li",
    venue: "Preprint 2026",
    url: "https://arxiv.org/abs/2601.06176",
  },
  {
    id: "08",
    index: "[08]",
    title: "HiMAC: Hierarchical Macro-Micro Learning for Long-Horizon LLM Agents",
    authors: "Hongbo Jin*, Rongpeng Zhu*, Jiayu Ding, Guibo Luo, Ge Li",
    venue: "Preprint 2026",
    url: "https://arxiv.org/abs/2603.00977",
  },
  {
    id: "09",
    index: "[09]",
    title: "DGPO: Distribution Guided Policy Optimization for Fine Grained Credit Assignment",
    authors: "Hongbo Jin*, Rongpeng Zhu*, Zhongjing Du, Xu Jiang, Jingqi Tian, Qiaoman Zhang, Jiayu Ding",
    venue: "Preprint 2026",
    url: "https://arxiv.org/abs/2605.03327",
  },
  {
    id: "10",
    index: "[10]",
    title: "VISD: Enhancing Video Reasoning via Structured Self-Distillation",
    authors: "Hao Lin*, Kunyang Lv*, Xu Jiang, Jingqi Tian, Zhongjing Du, Jiayu Ding, Qiaoman Zhang, Hongbo Jin",
    venue: "Preprint 2026",
    url: "https://arxiv.org/abs/2605.06094",
  },
  {
    id: "11",
    index: "[11]",
    title: "LMM-Track4D: Eliciting 4D Dynamic Reasoning in LMMs via Trajectory-Grounded Dialogue",
    authors: "Chaoyue Li, Yongxue Xu, Jie Feng, Jiayu Ding",
    venue: "Preprint 2026",
    url: "https://arxiv.org/abs/2605.19390",
  },
  {
    id: "12",
    index: "[12]",
    title: "Context-CoT: Enhancing Context Learning via High-Quality Reasoning Synthesis",
    authors: "Hongbo Jin*, Mingnan Zhu*, Jingqi Tian, Xu Jiang, Zhongjing Du, Haoran Tang, Siyi Xie, Qiaoman Zhang, Jiayu Ding",
    venue: "Preprint 2026",
    url: "https://arxiv.org/abs/2605.25354",
  },
  {
    id: "13",
    index: "[13]",
    title: "ContextGuard: Structured Self-Auditing for Context Learning in Language Models",
    authors: "Hongbo Jin*, Chi Wang*, Haoran Tang, Zhongjing Du, Xu Jiang, Jingqi Tian, Qiaoman Zhang, Jiayu Ding",
    venue: "Preprint 2026",
    url: "https://arxiv.org/abs/2605.26827",
  },
  {
    id: "14",
    index: "[14]",
    title: "4DVLT: Dynamic Scene Understanding with Worldline-Centered Vision-Language Tracking",
    authors: "Chaoyue Li, Boxue Yang, Shengyao Zhou, Haoyang Wu, Rui Qian, Linfeng Zhang",
    venue: "Preprint 2026",
    url: "https://arxiv.org/abs/2606.22631",
  },
];
