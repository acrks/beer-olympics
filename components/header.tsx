import Link from 'next/link';

const Header = () => {
    return (
        <header className="w-full flex justify-center items-center bg-gray-800 text-white py-4">
            <nav className="flex justify-around w-full">
            <Link href="/teams" className="hover:underline hover:scale-105 transition-transform">
                Teams
            </Link>
            <Link href="/" className="hover:underline hover:scale-105 transition-transform">
                Home
            </Link>
            <Link
                href="/games"
                className="hover:underline hover:scale-105 transition-transform"
            >
                Games
            </Link>
            </nav>
        </header>
    );
};

export default Header;