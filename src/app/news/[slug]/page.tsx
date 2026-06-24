import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { getVideoBySlug } from "@/data/featured";
import { getAllNewsSlugs, getNewsBySlug } from "@/data/news";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function renderArticleBody(content: string[]): ReactNode[] {
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length === 0) return;
    blocks.push(
      <ul key={`ul-${blocks.length}`} className="space-y-3 pl-1">
        {listItems.map((item, j) => {
          const sep = item.indexOf("：");
          const lead = sep > -1 ? item.slice(0, sep + 1) : null;
          const rest = sep > -1 ? item.slice(sep + 1) : item;
          return (
            <li key={j} className="flex gap-3 text-body text-[15px] leading-[1.9]">
              <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1a1a1a]" />
              <span>
                {lead && <strong className="font-semibold text-[#1a1a1a]">{lead}</strong>}
                {rest}
              </span>
            </li>
          );
        })}
      </ul>
    );
    listItems = [];
  };

  content.forEach((line, i) => {
    if (line.startsWith("## ")) {
      flushList();
      blocks.push(
        <h2 key={i} className="text-h3 text-[#1a1a1a] pt-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      blocks.push(
        <h3 key={i} className="text-lg font-semibold text-[#1a1a1a] pt-2">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
    } else {
      flushList();
      blocks.push(
        <p key={i} className="text-body text-[15px] leading-[1.9]">
          {line}
        </p>
      );
    }
  });
  flushList();
  return blocks;
}

export async function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return { title: "文章未找到" };
  return {
    title: `${article.title} — InkMind`,
    description: article.summary,
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  const videoSrc = getVideoBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <PageShell>
      {videoSrc && (
        <div className="relative h-[42vh] min-h-[260px] max-h-[440px] overflow-hidden bg-[#f7f7f7]">
          <video
            src={videoSrc}
            muted
            loop
            playsInline
            autoPlay
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      )}

      <article className={`mx-auto max-w-3xl px-6 lg:px-10 pb-20 ${videoSrc ? "pt-10" : "pt-8"}`}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#999999] hover:text-[#1a1a1a] transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          返回首页
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm text-[#999999]">{article.index}</span>
          <span className="rounded-full bg-[#f7f7f7] px-3 py-1 text-xs text-[#666666]">
            {article.tag}
          </span>
          <time className="text-xs text-[#999999]">{article.date}</time>
        </div>

        <h1 className="text-h2 text-[#1a1a1a] leading-tight mb-6">
          {article.title}
        </h1>

        <p className="text-body text-lg mb-10 pb-10 border-b border-[#e8e8e8]">
          {article.summary}
        </p>

        <div className="space-y-5">{renderArticleBody(article.content)}</div>

        <div className="mt-14 flex flex-wrap gap-4 pt-8 border-t border-[#e8e8e8]">
          <a
            href={article.arxivUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-white hover:bg-[#333333] transition-colors"
          >
            {article.linkLabel ?? "查看 Preprint 论文"}
          </a>
          <Link
            href="/papers"
            className="inline-flex items-center gap-2 rounded-full border border-[#e8e8e8] px-6 py-3 text-sm text-[#666666] hover:border-[#cccccc] hover:text-[#1a1a1a] transition-colors"
          >
            查看全部论文
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
