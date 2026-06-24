import { researchDirections } from "@/data/research";
import { FadeIn } from "@/components/FadeIn";

export function ResearchSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <FadeIn>
          <h2 className="text-h2 mb-12">探索智能的前沿边界</h2>
        </FadeIn>

        <div className="grid grid-cols-2 gap-px bg-[#e8e8e8] border border-[#e8e8e8] rounded-xl overflow-hidden">
          {researchDirections.map((dir, i) => (
            <FadeIn key={dir.id} delay={i * 80} className="bg-white">
              <div className="p-6 lg:p-8 h-full card-hover">
                <h3 className="text-h3 mb-3">{dir.title}</h3>
                <p className="text-body text-[17px] leading-relaxed">{dir.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
