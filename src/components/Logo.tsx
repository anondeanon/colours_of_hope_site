export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 text-ink">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="17" cy="17" r="17" fill="#B85C38" />
        <path
          d="M10 23c2.4-6.8 5.2-11.6 8.4-14.4 1.2 2.8.8 6.4-1.1 10.8 3.2-1.6 5.8-1.4 7.7.6-3.6 1.8-8.4 2.6-15 3z"
          fill="#FDF8F3"
        />
      </svg>
      <span className="text-[15px] font-semibold tracking-[-0.02em]">
        Colours of Hope
      </span>
    </a>
  );
}
