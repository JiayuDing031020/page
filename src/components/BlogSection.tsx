import Link from "next/link";
import { newsArticles } from "@/data/news";
import { FadeIn } from "@/components/FadeIn";

function BlogCard({ article }: { article: (typeof newsArticles)[0] }) {
  return (
    <article className="card-hover flex-shrink-0 w-[340px] lg:w-[400px] rounded-xl border border-[#e8e8e8] bg-white overflow-hidden">
      <div className="p-6 lg:p-7">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-[#999999]">{article.date}</span>
          <span className="text-sm px-2.5 py-0.5 rounded-full bg-[#f7f7f7] text-[#666666]">
            {article.tag}
          </span>
        </div>
        <h3 className="text-h3 mb-3 line-clamp-2 leading-snug">
          {article.title}
        </h3>
        <p className="text-body text-[17px] line-clamp-2 mb-5 leading-relaxed">{article.summary}</p>
        <Link
          href={`/news/${article.slug}`}
          className="inline-flex items-center gap-1 text-base font-medium text-[#1a1a1a] hover:gap-2 transition-all"
        >
          了解更多
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export function BlogSection() {
  const doubled = [...newsArticles, ...newsArticles];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#f7f7f7] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 mb-10">
        <FadeIn>
          <h2 className="text-h2">研究进展与发布</h2>
        </FadeIn>
      </div>

      <FadeIn delay={100}>
        <div className="relative">
          <div className="flex gap-5 marquee-track w-max pl-6 lg:pl-10">
            {doubled.map((article, i) => (
              <BlogCard key={`${article.id}-${i}`} article={article} />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
