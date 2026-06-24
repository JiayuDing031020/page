export interface ResearchDirection {
  id: string;
  title: string;
  description: string;
}

export const researchDirections: ResearchDirection[] = [
  {
    id: "llm",
    title: "LLM",
    description: "探索下一代大语言模型的前沿边界，覆盖后训练、推理、记忆与学习演进等核心方向。",
  },
  {
    id: "perception",
    title: "Multimodal Perception",
    description: "2D/视频/3D/4D 多维时空数据的感知建模，攻克复杂场景下的技术瓶颈。",
  },
  {
    id: "understanding",
    title: "Multimodal Understanding",
    description: "融合视觉、语言与空间推理，构建面向真实世界的深度理解能力。",
  },
  {
    id: "agentic-rl",
    title: "Agentic RL / OPD",
    description: "强化学习与偏好对齐驱动的智能体系统，探索认知与创造力的量化评估。",
  },
];
