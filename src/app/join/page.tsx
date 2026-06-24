import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import {
  JoinHero,
  VisionStrip,
  TeamsSection,
  TestimonialsSection,
  JoinTeamSection,
} from "@/components/JoinSection";

export const metadata: Metadata = {
  title: "加入我们 — InkMind Research",
  description: "加入 InkMind，真正参与 AI 领域最具挑战性的工作。",
};

export default function JoinPage() {
  return (
    <PageShell>
      <JoinHero />
      <VisionStrip />
      <TeamsSection />
      <TestimonialsSection />
      <JoinTeamSection />
    </PageShell>
  );
}
