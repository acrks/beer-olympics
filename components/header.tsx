import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center bg-gradient-to-r from-[#FF4433] via-[#ff401a] to-[#FF4C4C] text-white py-4">
    <Link
      href="/"
      className="w-1/2 pl-6 hover:underline hover:scale-105 transition-transform flex justify-center"
    >
      2025 Beer Olympics
    </Link>
    <header className="w-1/2 flex justify-end items-center text-white py-4">
    <nav className="flex w-full justify-evenly">
      <a
        href="https://partiful.com/e/PEp5QnjVrcHBcoy16j15"
        target="_blank"
        className="hover:underline hover:scale-105 transition-transform mx-2"
      >
        RSVP
        </a>
      <Link
        href="/teams"
        className="hover:underline hover:scale-105 transition-transform mx-2"
      >
        Teams
      </Link>
      <Link
        href="/games"
        className="hover:underline hover:scale-105 transition-transform mx-2"
      >
        Games
      </Link>
    </nav>
    </header>
    </div>
  );
};

export default Header;
