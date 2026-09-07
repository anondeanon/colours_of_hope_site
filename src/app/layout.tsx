import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-fraunces",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Colours of Hope — благодійний конкурс 2026",
  description:
    "Сім історій, розказаних фарбами. Статична сторінка конкурсу дитячого малюнка.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uk"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-ink">{children}</body>
    </html>
  );
}
