"use client";

import { useState } from "react";
import { artists } from "../data/artists";
import { ArtistModal } from "./ArtistModal";

export function Artists() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [votedId, setVotedId] = useState<string | null>(null);
  const openArtist = artists.find((artist) => artist.id === openId) ?? null;

  return (
    <section
      id="roboty"
      className="mx-auto w-full max-w-[1120px] px-5 pt-16 pb-8 sm:px-8 sm:pt-20"
    >
      <p className="text-center text-[12px] font-semibold tracking-[0.22em] text-[#8a847c] uppercase">
        Учасники
      </p>
      <h2 className="mt-4 text-center font-serif text-[34px] leading-tight font-medium sm:text-[42px]">
        Сім юних художників
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-[15px] leading-7 text-[#5c574f]">
        Познайомтесь з учасниками та їхніми роботами. Натисніть на картку, щоб
        відкрити малюнок.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((artist) => (
          <button
            key={artist.id}
            type="button"
            onClick={() => setOpenId(artist.id)}
            className={`overflow-hidden rounded-[22px] border bg-white text-left shadow-[0_12px_40px_rgba(40,28,18,0.06)] ${
              votedId === artist.id
                ? "border-terracotta ring-2 ring-terracotta/30"
                : "border-black/5"
            }`}
          >
            <div className="h-[168px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={artist.artwork}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between text-[12px] tracking-[0.14em] text-[#8a847c] uppercase">
                <span>{artist.number}</span>
                <span>
                  {artist.age} років · {artist.city}
                </span>
              </div>
              <h3 className="mt-2 font-serif text-[22px] leading-tight">
                {artist.name}
              </h3>
              <p className="mt-1 text-[14px] text-terracotta">{artist.title}</p>
              <p className="mt-2 text-[13px] leading-5 text-[#6b6560]">
                {artist.medium}
              </p>
            </div>
          </button>
        ))}
      </div>

      {openArtist ? (
        <ArtistModal
          artist={openArtist}
          voted={votedId === openArtist.id}
          onVote={() => setVotedId(openArtist.id)}
          onClose={() => setOpenId(null)}
        />
      ) : null}
    </section>
  );
}
