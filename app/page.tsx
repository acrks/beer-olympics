import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen pb-20 pt-20 gap-16 font-[family-name:var(--font-geist-sans)] space-y-5">
      <Hero
      title="2025 Beer Olympics"
      subtitle="Blood. Sweat. Beer."
      backgroundImage="/images/beer-olympics-hero.jpg"
      />
    </div>
  );
}
