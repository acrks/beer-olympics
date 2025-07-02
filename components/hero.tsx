import React from 'react';
import Image from 'next/image';

interface HeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {

    return (
        <div className='bg-cover bg-center p-16 text-white text-center flex flex-col items-center justify-center border-4 border-gray-300 rounded-lg shadow-md'>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
            <Image
            src="/assets/transparent-rings.png"
            alt="Beer Olympics Logo"
            width={200}
            height={200}
            />
        </div>
    );
};
export default Hero;