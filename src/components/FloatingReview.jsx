"use client";

import Link from "next/link";

export default function FloatingReview() {
  return (
    <Link
      href="https://maps.app.goo.gl/dzMvxdPRcZ7skW3C8?g_st=ic"
      target="_blank"
      className="
        fixed bottom-6 right-6 z-50
        bg-black text-white
        px-5 py-3
        rounded-full
        shadow-xl
        flex items-center gap-2
        hover:scale-105
        hover:bg-neutral-800
        transition-all duration-200
      "
    >
      <Star size={18} />
      Recenze ⭐
    </Link>
  );
}
