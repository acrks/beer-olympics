"use client";

import React from 'react';

interface GameCardProps {
    title: string;
    roundNumber: number;
    gameURL: string;
}


const GameCard: React.FC<GameCardProps> = ({ title, roundNumber }) => {
    return (
        <div
            className="w-3/4 bg-[#f0eee5] border-4 border-orange-500 rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
        >
            <h2 className="text-xl font-bold">Round #{roundNumber+1}</h2>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            {/* <p className="text-gray-600">{description}</p> */}
        </div>
    );
};

export default GameCard;