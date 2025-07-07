import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center pb-20 pt-20 gap-16 font-[family-name:var(--font-geist-sans)] space-y-5">
            <div className="w-full p-4 rounded-t-lg flex flex-row items-center justify-evenly">
            <p className="text-lg text-white">Blood.</p>
            <p className="text-lg text-white">Sweat.</p>
            <p className="text-lg text-white">Beer.</p>
            </div>
            <div className="w-full p-4 rounded-b-lg flex items-center justify-center">
            <Image
                src="/assets/transparent-rings.png"
                alt="Beer Olympics Logo"
                width={300}
                height={200}
            />
        </div>
    </div>
  );
}
