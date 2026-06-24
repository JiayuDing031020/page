export interface FeaturedItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  arxivUrl: string;
  slug: string;
  videoSrc: string;
  accentColor: string;
}

export const featuredItems: FeaturedItem[] = [
  {
    id: "extrinsplat",
    title: "ExtrinSplat",
    subtitle: "解耦式理解3D世界",
    description: "几何与语义解耦的开放词汇 3D 高斯泼溅框架，在复杂场景中实现精准语义理解。",
    arxivUrl: "https://arxiv.org/abs/2601.00001",
    slug: "extrinsplat",
    videoSrc: "/video/ExtrinSplat.mp4",
    accentColor: "#818cf8",
  },
  {
    id: "3dsav",
    title: "3DSAV",
    subtitle: "迈向可验证的3D世界",
    description: "首个 3D 场景断言验证框架，使智能体对三维环境中的自然语言陈述进行可验证推理。",
    arxivUrl: "https://arxiv.org/abs/2601.00002",
    slug: "3dsav",
    videoSrc: "/video/3DSAV.mp4",
    accentColor: "#22d3ee",
  },
  {
    id: "videocurl",
    title: "VideoCuRL",
    subtitle: "迈向高效视频理解后训练",
    description: "正交难度分解的视频课程强化学习，以更少算力实现更强的视频理解能力。",
    arxivUrl: "https://arxiv.org/abs/2601.00003",
    slug: "videocurl",
    videoSrc: "/video/VideoCuRL.mp4",
    accentColor: "#fb923c",
  },
  {
    id: "zerosplat",
    title: "ZeroSplat",
    subtitle: "广义3D高斯泼溅下的语义对齐",
    description: "零样本 3D 指代分割，无需额外标注即可完成开放词汇的 3D 场景理解。",
    arxivUrl: "https://arxiv.org/abs/2601.00004",
    slug: "zerosplat",
    videoSrc: "/video/ZeroSplat.mp4",
    accentColor: "#f472b6",
  },
];

export function getVideoBySlug(slug: string): string | undefined {
  return featuredItems.find((item) => item.slug === slug)?.videoSrc;
}
