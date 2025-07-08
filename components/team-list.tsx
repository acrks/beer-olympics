import React from 'react';

interface team {
    country: string;
    members: TeamMember[];
}
interface TeamMember {
    name: string;
    favoriteBeer: string;
}

interface TeamListProps {
    countryName: string;
}

const teamMembers: team[] = [
    { country: 'Mexico', 
        members: [
            {name: "Robyn", favoriteBeer: 'Coors' },
            {name: "Vanessa", favoriteBeer: 'A Blunt' },
            {name: "Arjun", favoriteBeer: 'A Blunt' },
            {name: "Felicia", favoriteBeer: 'A Blunt' },
            {name: "Sarah Barthlow", favoriteBeer: 'A Blunt' },
        ]},
    { country: 'France', 
        members: [
            {name: "Christen Soucy", favoriteBeer: 'Sam Adams' },
            {name: "Andrew", favoriteBeer: 'Guinness' },
            {name: "Jason", favoriteBeer: 'Guinness' },
            {name: "Paige", favoriteBeer: 'Guinness' },
            {name: "Sophia", favoriteBeer: 'Guinness' },
        ]},
    { country: 'Australia', 
        members: [
            {name: "Samir Singhal", favoriteBeer: 'IPA' },
            {name: "Alex Crooks", favoriteBeer: 'IPA' },
            {name: "Molly", favoriteBeer: 'A Candle' },
            {name: "Golan", favoriteBeer: 'A Candle' },
            {name: "Sanam", favoriteBeer: 'A Candle' },
        ]},
    { country: 'Thailand', 
        members: [
            {name: "Nikki", favoriteBeer: 'Michelob Ultra' },
            {name: "Nick", favoriteBeer: 'Stone Hazy IPA' },
            {name: "Rad", favoriteBeer: 'Stone Hazy IPA' },
            {name: "Trish", favoriteBeer: 'Stone Hazy IPA' },
            {name: "Sarah Epstein", favoriteBeer: 'Stone Hazy IPA' },
            {name: "Kian", favoriteBeer: 'Stone Hazy IPA' },

        ]},
]

interface TeamListProps {
    countryName: string;
}

const TeamList: React.FC<TeamListProps> = ({ countryName }) => {
    return (
        <div className='w-1/2'>
            <ul>
                {teamMembers
                    .find(team => team.country === countryName)?.members.map((member, index) => (
                    <li key={index}>
                        {index + 1}) <strong>{member.name}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamList;