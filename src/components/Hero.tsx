export function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-[1120px] px-5 pb-10 pt-6 sm:px-8 sm:pt-10">
      <p className="text-[12px] font-semibold tracking-[0.18em] text-terracotta uppercase">
        Благодійний конкурс 2026
      </p>
      <h1 className="mt-4 max-w-[16ch] font-serif text-[42px] leading-[1.12] font-medium tracking-[-0.03em] text-ink sm:text-[58px] lg:text-[68px]">
        Сім історій,{" "}
        <span className="text-terracotta">розказаних</span> фарбами
      </h1>
      <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f6ddd0] px-3.5 py-1.5 text-[13px] font-medium text-terracotta">
        <span aria-hidden>♥</span>
        Переможець отримує грант на лікування
      </div>
      <p className="mt-6 max-w-[42rem] text-[16px] leading-7 text-[#5c574f] sm:text-[17px]">
        Сім дітей, сім поглядів на світ — через фарби, олівці і сміливість.
        Проголосуйте за роботу, яка вас зачепила, і допоможіть нам підтримати
        юних художників.
      </p>
      <a
        href="#roboty"
        className="mt-8 inline-flex h-12 items-center rounded-xl bg-terracotta px-6 text-[15px] font-medium text-white hover:bg-terracotta-deep"
      >
        → Голосувати
      </a>
    </section>
  );
}
