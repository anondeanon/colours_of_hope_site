"use client";

import { useEffect, useState } from "react";

const END_AT = Date.parse("2026-09-13T20:55:00+03:00");

function pad(value: number) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function getParts(now: number) {
  const diff = Math.max(0, END_AT - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [parts, setParts] = useState(() => getParts(Date.now()));

  useEffect(() => {
    const id = window.setInterval(() => {
      setParts(getParts(Date.now()));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const items = [
    { value: pad(parts.days), label: "Днів" },
    { value: pad(parts.hours), label: "Годин" },
    { value: pad(parts.minutes), label: "Хвилин" },
    { value: pad(parts.seconds), label: "Секунд" },
  ];

  return (
    <section className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
      <div className="flex flex-col gap-8 rounded-[28px] bg-timer px-7 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-9">
        <div>
          <h2 className="font-serif text-[28px] leading-tight font-medium sm:text-[32px]">
            До кінця голосування
          </h2>
          <p className="mt-2 text-[14px] text-white/55">
            Голосування закриється після закінчення таймера
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5 sm:gap-8">
          {items.map((item) => (
            <div key={item.label} className="min-w-[3.5rem] text-center">
              <div className="font-serif text-[34px] leading-none font-medium tabular-nums sm:text-[42px]">
                {item.value}
              </div>
              <div className="mt-2 text-[11px] tracking-[0.14em] text-white/55 uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
