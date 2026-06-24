import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <div className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="text-6xl font-bold text-[#e8e8e8] mb-4">404</h1>
        <p className="text-[#666666] mb-8">页面未找到</p>
        <Link
          href="/"
          className="rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-white hover:bg-[#333333] transition-colors"
        >
          返回首页
        </Link>
      </div>
    </PageShell>
  );
}
