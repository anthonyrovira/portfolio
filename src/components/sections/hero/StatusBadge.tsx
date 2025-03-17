import { useLanguage } from "@/hooks/useLanguage";
import { memo } from "react";

const StatusBadge = memo(() => {
  const { t } = useLanguage();

  return (
    <div className="inline-flex animate-float lg:mx-0">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000" />
        <div className="relative px-3 sm:px-4 py-2.5 rounded-full dark:bg-black/40 backdrop-blur-xl border border-white/10">
          <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text px-2 sm:text-sm text-base font-medium flex items-center">
            <span className="w-3 h-3 mr-2 rounded-full animate-pulse bg-cyan-500" />
            {t.hero.statusText}
          </span>
        </div>
      </div>
    </div>
  );
});

export default StatusBadge;
