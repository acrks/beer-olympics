"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface GameCardProps {
    title: string;
    description: string;
    gameURL: string;
}


const GameCard: React.FC<GameCardProps> = ({ title, description, gameURL }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(gameURL); // Replace with your desired route
      };
    return (
        <div
            className="w-3/4 bg-[#f0eee5] border-4 border-orange-500 rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer"
            onClick={handleClick}
        >
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default GameCard;