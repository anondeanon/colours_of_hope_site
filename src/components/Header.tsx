import { Logo } from "./Logo";

const links = [
  { href: "#roboty", label: "Роботи" },
  { href: "#pryzy", label: "Призи" },
  { href: "#kontakty", label: "Контакти" },
];

export function Header() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-[1120px] items-center justify-between px-5 py-6 sm:px-8 sm:py-7">
      <Logo />
      <nav className="flex items-center gap-6 sm:gap-9">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[13px] font-medium text-ink/80 hover:text-terracotta"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
