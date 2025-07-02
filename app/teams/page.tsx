import React from 'react';
import CountryCard from '@/components/country-card';
const countries = [
    { name: 'USA', flagUrl: '/assets/flags/usa.png' },
    { name: 'Germany', flagUrl: '/assets/flags/ger.jpg' },
    { name: 'Australia', flagUrl: '/assets/flags/aus.svg' },
    { name: 'Flavortown', flagUrl: '/assets/flags/flavortown.png' },
];
const TeamPage: React.FC = () => {
    return (
        <div className="items-center justify-items-center min-h-screen pb-20 pt-20 gap-16 font-[family-name:var(--font-geist-sans)] space-y-5">
            <h1>Teams</h1>
            {countries.map((country, index) => (
                <CountryCard flagUrl={country.flagUrl} options={[""]} key={index} countryName={country.name} />
            ))}
        </div>
    );
};

export default TeamPage;