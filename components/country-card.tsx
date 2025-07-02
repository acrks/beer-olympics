'use client';

import React from 'react';
import Image from 'next/image';
import TeamList from '@/components/team-list';

interface CountryCardProps {
    flagUrl: string;
    countryName: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ flagUrl, countryName }) => {
    return (
        <div className="w-3/4 bg-[#f0eee5] border-4 border-orange-500 rounded-lg p-4 flex items-center">
            <div className="w-1/4 flex items-center">
            <Image
            width={50}
            height={10}
            src={flagUrl}
            alt={`${countryName} flag`}
            className='w-full h-auto rounded-lg'
            />
            </div>
            <h2 className="px-4 w-1/4">{countryName}</h2>
            <TeamList countryName={countryName}/>
        </div>
    );
};

export default CountryCard;