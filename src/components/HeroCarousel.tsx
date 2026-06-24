"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { featuredItems } from "@/data/featured";
import { siteConfig } from "@/data/site";

const INTERVAL_MS = 6000;
const COUNT = featuredItems.length;

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % COUNT);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const active = featuredItems[activeIndex];

  return (
    <section className="hero-bg-gradient relative -mt-16 min-h-screen overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1320px] flex-col px-6 pt-24 pb-10 lg:px-10 lg:pt-28 lg:pb-14">
        <div
          className="hero-tagline-wrap opacity-0 animate-fade-in-up w-full shrink-0"
          style={{ animationDelay: "0.1s" }}
        >
          <h1 className="hero-tagline">{siteConfig.tagline}</h1>
        </div>

        <div className="mt-4 flex w-full flex-1 flex-col items-center justify-center lg:mt-5">
          <p className="hero-subtagline w-full mb-8 lg:mb-10">向上突破智能边界，向下扎根社会价值</p>

          {/* Single large showcase card — Seed style */}
          <div className="seed-stage relative w-full overflow-hidden rounded-3xl bg-[#0a0a0a] shadow-[0_30px_80px_rgba(0,0,0,0.18)] ring-1 ring-[#e8e8e8]">
            <div className="relative aspect-[16/9] w-full">
              {featuredItems.map((item, i) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-[900ms] ease-out ${
                    i === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={i !== activeIndex}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={item.videoSrc}
                    muted
                    loop
                    playsInline
                    autoPlay={i === 0}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}

              {/* Scrim */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

              {/* Overlaid content */}
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 lg:p-12">
                <div key={activeIndex} className="seed-slide-in max-w-2xl">
                  <p className="mb-2 text-sm font-medium tracking-wide text-white/70 sm:text-base">
                    {active.title}
                  </p>
                  <h2 className="seed-stage-title mb-4 text-white">{active.subtitle}</h2>
                  <p className="mb-6 hidden max-w-xl text-[15px] leading-relaxed text-white/75 sm:block">
                    {active.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={`/news/${active.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-[#1a1a1a] transition-all hover:scale-[1.03] hover:bg-white/90"
                    >
                      了解更多
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="/papers"
                      className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base text-white transition-all hover:border-white hover:bg-white/10"
                    >
                      查看全部
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Switcher — name + progress, Seed style */}
          <div className="mt-7 flex w-full max-w-5xl flex-wrap items-stretch justify-center gap-2 lg:mt-9 lg:gap-3">
            {featuredItems.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(i)}
                className="group flex min-w-[120px] flex-1 flex-col gap-2 text-left"
                aria-label={`切换到 ${item.title}`}
                aria-current={i === activeIndex ? "true" : undefined}
              >
                <span className="relative h-[3px] w-full overflow-hidden rounded-full bg-[#e8e8e8]">
                  <span
                    key={i === activeIndex ? `p-${activeIndex}` : `i-${i}`}
                    className={`absolute inset-y-0 left-0 rounded-full bg-[#1a1a1a] ${
                      i === activeIndex ? "hero-progress" : "w-0"
                    }`}
                  />
                </span>
                <span
                  className={`text-sm transition-colors lg:text-base ${
                    i === activeIndex
                      ? "font-medium text-[#1a1a1a]"
                      : "text-[#999999] group-hover:text-[#1a1a1a]"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
