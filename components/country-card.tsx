import React from 'react';
import Image from 'next/image';

interface CountryCardProps {
    flagUrl: string;
    countryName: string;
    options: string[];
}

const CountryCard: React.FC<CountryCardProps> = ({ flagUrl, countryName, options }) => {
    return (
        <div className="w-3/4 bg-[#f0eee5] border-4 border-orange-500 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
            <Image
            width={60}
            height={45}
            src={flagUrl}
            alt={`${countryName} flag`}
            className="mr-4"
            />
            <h2 className="m-0">{countryName}</h2>
            </div>
            <select className="border rounded px-2 py-1">
            {options.map((option, index) => (
            <option key={index} value={option}>
            {option}
            </option>
            ))}
            </select>
        </div>
    );
};

export default CountryCard;