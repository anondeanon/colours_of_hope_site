"use client";

import { useEffect } from "react";
import type { Artist } from "../data/artists";

type Props = {
  artist: Artist;
  voted: boolean;
  onVote: () => void;
  onClose: () => void;
};

export function ArtistModal({ artist, voted, onVote, onClose }: Props) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  // Функція переходу на сторінку логіна
  const goToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      <button
        type="button"
        aria-label="Закрити"
        className="absolute inset-0 bg-black/55"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="artwork-title"
        className="relative z-10 grid max-h-[92vh] w-full max-w-[980px] overflow-y-auto overflow-x-hidden rounded-[24px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.28)] md:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] md:overflow-hidden"
      >
        <div className="h-[240px] bg-[#f3eee8] md:h-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={artist.artwork}
            alt={artist.title}
            className="h-full w-full object-cover md:min-h-[560px]"
          />
        </div>

        <div className="relative flex flex-col px-6 py-7 sm:px-8 sm:py-8">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center text-[#b0aaa4] hover:text-ink"
            aria-label="Закрити вікно"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1 1 13"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="flex items-start gap-3 pr-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={artist.avatar}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="text-[16px] font-semibold text-ink">{artist.name}</p>
              <p className="mt-0.5 text-[13px] leading-5 text-[#7a746c]">
                {artist.age} років · {artist.bio}
              </p>
            </div>
          </div>

          <h3
            id="artwork-title"
            className="mt-8 font-serif text-[32px] leading-tight font-medium sm:text-[36px]"
          >
            {artist.title}
          </h3>
          <p className="mt-4 text-[15px] leading-7 text-[#5c574f]">{artist.story}</p>

          <div className="mt-auto flex flex-col gap-3 pt-8">
            <button
              type="button"
              onClick={goToLogin}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#c45c3c] px-6 text-[15px] font-medium text-white hover:bg-[#b14f32]"
            >
              {voted ? "Обрано цю роботу" : "→ Голосувати за цю роботу"}
            </button>
            <p className="text-center text-[12px] text-[#8a847c]">
              {voted
                ? "Вибір збережено на цій сторінці"
                : "Відкриється форма голосування"}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#e4e0db] bg-white px-6 text-[15px] text-[#4f4a44] hover:bg-[#faf7f3]"
            >
              ← Назад до робіт
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}