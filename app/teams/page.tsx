import React from 'react';
import CountryCard from '@/components/country-card';

const countries = [
    { name: 'Mexico', flagUrl: '/assets/flags/mexico.png' },
    { name: 'France', flagUrl: '/assets/flags/france.png' },
    { name: 'Australia', flagUrl: '/assets/flags/aus.svg' },
    { name: 'Thailand', flagUrl: '/assets/flags/thailand.png' },
];
const TeamPage: React.FC = () => {
    return (
        <div className="items-center justify-items-center pb-20 pt-20 gap-16 font-[family-name:var(--font-geist-sans)] space-y-5">
            {countries.map((country, index) => (
                <CountryCard flagUrl={country.flagUrl} key={index} countryName={country.name} />
            ))}
        </div>
    );
};

export default TeamPage;