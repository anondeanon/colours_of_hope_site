import { Artists } from "../components/Artists";
import { Countdown } from "../components/Countdown";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Prizes } from "../components/Prizes";

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-80px] right-[-180px] h-[520px] w-[520px] rounded-full bg-[#f3c7ae] opacity-55 blur-[90px]"
      />
      <Header />
      <Hero />
      <Countdown />
      <Artists />
      <Prizes />
      <Footer />
    </div>
  );
}