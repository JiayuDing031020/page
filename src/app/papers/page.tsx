import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { BlogSection } from "@/components/BlogSection";
import { PapersSection } from "@/components/PapersSection";

export const metadata: Metadata = {
  title: "博客&论文 — InkMind Research",
  description: "InkMind Research 研究博客与学术论文。",
};

export default function PapersPage() {
  return (
    <PageShell>
      <BlogSection />
      <PapersSection />
    </PageShell>
  );
}
