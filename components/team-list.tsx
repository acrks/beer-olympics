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
    { country: 'Australia', 
        members: [
            {name: "Samir Singhal", favoriteBeer: 'Coors' },
            {name: "Nikki Singhal", favoriteBeer: 'Gin Fizz' },
        ]},
    { country: 'USA', 
        members: [
            {name: "Christen Soucy", favoriteBeer: 'Sam Adams' },
            {name: "Felicia", favoriteBeer: 'Guinness' }
        ]},
    { country: 'Germany', 
        members: [
            {name: "Alex Crooks", favoriteBeer: 'IPA' },
            {name: "Molly", favoriteBeer: 'A Candle' },
        ]},
    { country: 'Flavortown', 
        members: [
            {name: "Robyn Lee-D'Elia", favoriteBeer: 'Michelob Ultra' },
            {name: "Andrew Cardoni", favoriteBeer: 'Stone Hazy IPA' },

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
                        {index + 1}) <strong>{member.name}</strong><br/>Favorite Beer: {member.favoriteBeer}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamList;