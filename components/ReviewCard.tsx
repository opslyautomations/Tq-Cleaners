import type { Review } from "@/lib/constants";

export default function ReviewCard({ review, dark = true }: { review: Review; dark?: boolean }) {
  return (
    <div className={`${dark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-100 shadow-md"} rounded-xl p-6 flex flex-col gap-4`}>
      <div className="flex items-center gap-0.5 text-[#E6B800] text-lg" aria-label={`${review.rating} stars`}>
        {"★".repeat(review.rating)}
      </div>
      <p className={`text-sm leading-relaxed italic ${dark ? "text-[#F5F9FC]/85" : "text-[#1A2332]/80"}`}>
        &ldquo;{review.body}&rdquo;
      </p>
      <div className={`text-sm font-semibold ${dark ? "text-[#4FC3F7]" : "text-[#0A1628]"}`}>
        {review.name}
        <span className={`font-normal ml-1 ${dark ? "text-[#F5F9FC]/60" : "text-[#1A2332]/50"}`}>— {review.city}</span>
      </div>
    </div>
  );
}
