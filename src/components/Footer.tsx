import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer-gradient border-t border-[#e8e8e8] pt-12 pb-16">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-[#1a1a1a]">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-[#999999]">{siteConfig.tagline}</p>
          </div>
          <nav className="flex gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-[#cccccc]">
          © {new Date().getFullYear()} InkMind.AI Research. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-[#cccccc]">{siteConfig.companyName}</p>
      </div>
      <div className="footer-aurora" aria-hidden="true" />
      <div className="footer-aurora-line" aria-hidden="true" />
    </footer>
  );
}
