export interface Team {
  id: string;
  name: string;
  description: string;
  quote?: string;
  image?: string;
  applyUrl: string;
}

export const teams: Team[] = [
  {
    id: "llm",
    name: "InkMind-LLM",
    description:
      "InkMind-LLM 团队专注探索下一代大模型的前沿边界，并且研究大模型研发的基础问题。我们的研究广泛覆盖后训练、模型推理、记忆机制、学习演进等关键领域。我们致力于前沿技术的突破，更注重技术的端到端落地，探索拓宽大模型在各类应用场景中的融合边界。",
    quote:
      "我的主要工作是通过探索大模型认知机制提升模型理解能力。得益于组内极其完善的工程基建和开放的讨论氛围，我们能将精力真正聚焦于 Post-train 算法本身，让前沿的理论推导快速在真实场景中完成验证与迭代。",
    image: "/images/team-comm-1.png",
    applyUrl: "mailto:Eter1118@163.com?subject=应聘 InkMind-LLM 团队",
  },
  {
    id: "vision",
    name: "InkMind-Vision",
    description:
      "InkMind-Vision 团队致力于 2D/视频/3D/4D 多模态感知与理解的基础模型的前沿科研和应用研发。我们坚持以解决实际问题为导向，依托基础模型底座，攻克多维时空数据下的技术瓶颈，到打造高效、稳定的科研与工程解决方案。",
    quote:
      "团队的科研节奏非常纯粹，且前期积累了成熟的基础模型框架，极大缩短了从 Idea 到代码验证的周期。入组三个月，我便跑通了所有的实验流程，顺利主导并向人工智能顶会投递了自己在多维时空感知方向的第一篇核心工作。",
    image: "/images/team-comm-2.png",
    applyUrl: "mailto:jiayu1646@gmail.com?subject=应聘 InkMind-Vision 团队",
  },
  {
    id: "data",
    name: "InkMind-Data",
    description:
      "InkMind-Data 团队致力于下一代人工智能核心数据引擎的前沿研究与基建探索。团队探索突破高质量数据供给的「卡脖子」困境，为打造自主可控、具备国际竞争力的基础大模型提供坚实的数据底座。",
    quote:
      "我目前主要参与多模态对齐语料和合成数据管线的开发，作为贡献者参与了学术论文的投递。看着一套高标准、规模化的数据体系从底层切实提升了基础模型的表现，是这份研究最直观的正反馈。",
    image: "/images/team-comm-3.png",
    applyUrl: "mailto:2601128152@qq.com?subject=应聘 InkMind-Data 团队",
  },
  {
    id: "ai4science",
    name: "InkMind-AI for Science",
    description:
      "InkMind-AI for Science 团队专注于 AI 技术落地垂类场景的前瞻技术探索，围绕教育领域基础模型等方向，用 AI 推动垂类领域的研究范式突破。",
    quote:
      "我主要探索将基础模型应用到垂类科研与教育场景中。团队鼓励我们直接面向真实需求做技术选型，从一个想法到可用的原型往往只需要很短的周期。能亲眼看到 AI 真正改变一个垂直领域的研究范式，是非常有成就感的事。",
    image: "/images/team-comm-4.png",
    applyUrl: "mailto:lumpin@163.com?subject=应聘 InkMind-AI for Science 团队",
  },
];

export const recruitment = {
  description:
    "与团队一起攻克大模型与多模态的前沿难题，发表顶级学术论文，并将核心算法落地到真实场景中。",
  requirements: [
    "优秀的代码能力、数据结构和基础算法功底，熟练使用 PyTorch 深度学习框架；",
    "熟悉相关领域研究，在相关领域有过良好研究记录者优先；",
    "主导过有影响力的项目或论文者优先；",
    "出色的问题分析和解决能力，能深入解决大模型训练和应用存在的问题；",
    "良好的沟通协作能力，认可团队的目标和文化，能和团队一起探索新技术，推进技术进步。",
  ],
};

export const joinHighlights = [
  {
    title: "挑战「未被定义」的真问题",
    content:
      "真正伟大的工作，始于提出正确的问题。在这里，你不应是被动接收需求的「答题者」，而是主动探究前沿边界的「定义者」。我们鼓励你穿透繁杂的技术表象，去敏锐地发现那些尚未被行业标准化、甚至尚未被察觉的核心痛点。从直击本源地提取与定义问题，到用最底层的算法创新将其彻底解决，你需要具备第一性原理的洞察力，并亲手打造出无可替代的解决方案。",
  },
  {
    title: "探索建立下一代智能体系",
    content:
      "纯算力堆砌的红利正在见顶，下一个爆发点在于对智能本身的重新定义。我们鼓励你和我们一起探索建立下一代智能体系。我们鼓励你脱离既有的标准，为下一代人工智能体系建设做出贡献。",
  },
  {
    title: "学术顶会与真实世界的「双向奔赴」",
    content:
      "我们为你提供纯粹且极致的科研环境：不仅全力支持你主导开源框架与数据集的发布，投递顶级学术会议；更重要的是，你能亲眼看到你的核心算法被部署到真实的场景中，看到前沿技术在现实社会中跳动的脉搏。",
  },
];
