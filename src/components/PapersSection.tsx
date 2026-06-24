import { FadeIn } from "@/components/FadeIn";
import { papers } from "@/data/papers";

const paperTitleClass = "paper-serif text-[15px] leading-relaxed text-black";
const paperAuthorClass = "paper-serif text-[15px] leading-relaxed text-[#666666]";

export function PapersSection() {
  return (
    <section id="papers" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <FadeIn>
          <h2 className="text-h2 mb-4">InkMind Research</h2>
          <p className="text-body text-[17px] mb-12 max-w-xl">
            计算机视觉、自然语言处理与多模态学习领域的最新研究成果。
          </p>
        </FadeIn>

        <div className="border border-[#e8e8e8] rounded-xl overflow-hidden">
          {papers.map((paper, i) => (
            <FadeIn key={paper.id} delay={i * 40}>
              <article
                className={`group flex flex-col gap-1 px-5 py-5 transition-colors hover:bg-[#fafafa] sm:flex-row sm:items-start sm:gap-5 ${
                  i !== papers.length - 1 ? "border-b border-[#e8e8e8]" : ""
                }`}
              >
                <span className={`shrink-0 w-8 pt-0.5 ${paperAuthorClass}`}>
                  {paper.index}
                </span>
                <div className="flex-1 min-w-0">
                  {paper.url ? (
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${paperTitleClass} hover:underline block`}
                    >
                      {paper.title}
                    </a>
                  ) : (
                    <p className={paperTitleClass}>{paper.title}</p>
                  )}
                  <p className={`mt-1 ${paperAuthorClass}`}>{paper.authors}</p>
                </div>
                <span className={`shrink-0 self-start rounded-md bg-[#f7f7f7] px-3 py-1.5 ${paperAuthorClass}`}>
                  {paper.venue}
                </span>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
