import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen pb-20 pt-20 gap-16 font-[family-name:var(--font-geist-sans)] space-y-5">
      <Hero
      title="Beer Olympics"
      subtitle="Welcome to the ultimate beer-themed competition!"
      backgroundImage="/images/beer-olympics-hero.jpg"
      />
    </div>
  );
}
