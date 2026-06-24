import { joinHighlights, recruitment, teams } from "@/data/teams";
import { FadeIn } from "@/components/FadeIn";

const bodyClass = "text-[17px] leading-[1.85] text-[#666666]";
const teamNameClass = `${bodyClass} text-black font-bold`;

export function JoinHero() {
  return (
    <section className="pt-14 pb-16 lg:pt-20 lg:pb-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center">
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-h2 text-[#1a1a1a]">加入我们</h1>
          <p className="text-h2 text-[#1a1a1a] mt-4 whitespace-nowrap">
            真正参与 AI 领域最具挑战性的工作
          </p>
        </div>
      </div>
    </section>
  );
}

export function VisionStrip() {
  return (
    <section className="pb-20 lg:pb-28 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <FadeIn>
          <div className="rounded-2xl border border-[#e8e8e8] overflow-hidden">
            {joinHighlights.map((item, i) => (
              <div
                key={i}
                className="vision-strip-item flex flex-col lg:flex-row gap-4 lg:gap-12 px-6 py-8 lg:px-10 lg:py-10 bg-white hover:bg-[#fafafa] transition-colors duration-300"
              >
                <div className="shrink-0 lg:w-16">
                  <span className="vision-index font-mono leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="vision-item-title mb-3">{item.title}</h3>
                  <p className={bodyClass}>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <p className={`${bodyClass} text-center mt-12 max-w-2xl mx-auto`}>
            来这里，真正参与这场让技术回归于人的伟大浪潮。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function TeamsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f7f7f7]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <FadeIn>
          <h2 className="text-h2 mb-10">研究团队</h2>
        </FadeIn>

        <div className="rounded-2xl border border-[#e8e8e8] overflow-hidden bg-white">
          {teams.map((team, i) => (
            <FadeIn key={team.id} delay={i * 80}>
              <div
                className={`px-6 py-8 lg:px-10 lg:py-10 hover:bg-[#fafafa] transition-colors duration-300 ${
                  i !== teams.length - 1 ? "border-b border-[#e8e8e8]" : ""
                }`}
              >
                <p className={`${teamNameClass} mb-3`}>{team.name}</p>
                <p className={bodyClass}>{team.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 mb-10">
        <FadeIn>
          <h2 className="text-h2">团队同学说</h2>
        </FadeIn>
      </div>

      <FadeIn delay={100}>
        <div className="testimonial-scroll flex gap-6 overflow-x-auto px-6 lg:px-10 pb-4 snap-x snap-mandatory">
          {teams.filter((team) => team.quote && team.image).map((team) => (
            <figure
              key={team.id}
              className="snap-start shrink-0 w-[300px] sm:w-[380px] lg:w-[440px] rounded-2xl border border-[#e8e8e8] overflow-hidden bg-white"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f0f0f0]">
                <img
                  src={team.image}
                  alt={`${team.name} 团队交流`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-6 lg:p-7">
                <cite className={`not-italic ${teamNameClass} block mb-3`}>
                  {team.name}
                </cite>
                <p className={`${bodyClass} text-[15px]`}>&ldquo;{team.quote}&rdquo;</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

export function JoinTeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f7f7f7]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <FadeIn>
          <h2 className="text-h2 mb-4">加入团队</h2>
          <p className={`${bodyClass} max-w-2xl mb-12`}>
            四个研究团队同时开放投递，期待与你共同探索人工智能的前沿边界。
          </p>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* Job description + requirements */}
          <FadeIn>
            <div className="rounded-2xl border border-[#e8e8e8] bg-white p-7 lg:p-9">
              <h3 className="vision-item-title mb-3">职位描述</h3>
              <p className={`${bodyClass} mb-8`}>{recruitment.description}</p>

              <h3 className="vision-item-title mb-4">职位要求</h3>
              <ol className="space-y-4">
                {recruitment.requirements.map((req, i) => (
                  <li key={i}>
                    <p className={bodyClass}>
                      {i + 1}、{req}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          {/* Three teams with apply links */}
          <FadeIn delay={120}>
            <div className="flex flex-col gap-4">
              {teams.map((team) => (
                <a
                  key={team.id}
                  href={team.applyUrl}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-[#e8e8e8] bg-white px-6 py-6 lg:px-8 lg:py-7 transition-all hover:border-[#cccccc] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                >
                  <div className="min-w-0">
                    <p className={`${teamNameClass} mb-1`}>{team.name}</p>
                    <p className="text-sm text-[#999999]">简历直达部门负责人邮箱</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-medium text-white transition-all group-hover:scale-[1.04] group-hover:bg-[#333333]">
                    投递
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
