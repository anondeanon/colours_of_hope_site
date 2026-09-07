export function Footer() {
  return (
    <footer
      id="kontakty"
      className="border-t border-black/5 bg-[#f6efe7] px-5 py-12 sm:px-8"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-[26px]">Colours of Hope</p>
          <p className="mt-2 max-w-sm text-[14px] leading-6 text-[#5c574f]">
            Благодійний конкурс дитячого малюнка 2026. Сторінка зібрана як
            статичний макет: без окремих сторінок і без відправки голосу.
          </p>
        </div>
        <div className="text-[14px] text-[#5c574f]">
          <p>Партнерство та питання</p>
          <p className="mt-1 font-medium text-ink">partners@coloursofhope.org</p>
        </div>
      </div>
    </footer>
  );
}
