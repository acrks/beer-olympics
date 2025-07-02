import React from 'react';
import Image from 'next/image';

interface HeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {

    return (
        <div className='w-3/4 bg-cover bg-center p-16 text-white text-center flex flex-col items-center justify-center border-4 border-gray-300 rounded-lg shadow-md'
        style={{ background: 'linear-gradient(to bottom, #4e2761, transparent)' }}>
            <div className="w-full p-4 rounded-t-lg flex flex-col items-center">
            {subtitle && <p>{subtitle}</p>}
            </div>
            <div className="w-full p-4 rounded-b-lg flex items-center justify-center">
            <Image
                src="/assets/transparent-rings.png"
                alt="Beer Olympics Logo"
                width={200}
                height={200}
            />
            </div>
        </div>
    );
};
export default Hero;