export function Prizes() {
  const prizes = [
    {
      place: "Перше місце",
      title: "Грант на лікування",
      text: "Переможець конкурсу отримує фінансову допомогу на медичне лікування. Розмір гранта визначають організатори разом із партнерами конкурсу.",
    },
    {
      place: "Друге місце",
      title: "Спеціальний приз",
      text: "Буде оголошено ближче до завершення голосування.",
    },
    {
      place: "Третє місце",
      title: "Спеціальний приз",
      text: "Буде оголошено ближче до завершення голосування.",
    },
  ];

  return (
    <section
      id="pryzy"
      className="mx-auto w-full max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20"
    >
      <p className="text-center text-[12px] font-semibold tracking-[0.22em] text-[#8a847c] uppercase">
        Нагороди
      </p>
      <h2 className="mt-4 text-center font-serif text-[34px] leading-tight font-medium sm:text-[42px]">
        Що отримають переможці
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-[15px] leading-7 text-[#5c574f]">
        Три найкращі роботи за підсумками голосування отримають спеціальні
        призи.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {prizes.map((prize, index) => (
          <article
            key={prize.place}
            className="rounded-[22px] border border-black/5 bg-white p-6 shadow-[0_12px_40px_rgba(40,28,18,0.06)]"
          >
            <p className="text-[12px] tracking-[0.16em] text-terracotta uppercase">
              {String(index + 1).padStart(2, "0")} · {prize.place}
            </p>
            <h3 className="mt-3 font-serif text-[24px] leading-tight">
              {prize.title}
            </h3>
            <p className="mt-3 text-[14px] leading-6 text-[#5c574f]">
              {prize.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
