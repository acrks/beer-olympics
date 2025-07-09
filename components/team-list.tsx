import React from 'react';

interface team {
    country: string;
    members: TeamMember[];
}
interface TeamMember {
    name: string;
}

interface TeamListProps {
    countryName: string;
}

const teamMembers: team[] = [
    { country: 'Mexico', 
        members: [
            {name: "Robyn Lee-D'Elia"},
            {name: "Vanessa Holback" },
            {name: "Arjun Singh" },
            {name: "Felicia" },
            {name: "Sarah Barthlow" },
        ]},
    { country: 'France', 
        members: [
            {name: "Christen Soucy"},
            {name: "Andrew Cardoni" },
            {name: "Jason Adame" },
            {name: "Sophie Wood" },
        ]},
    { country: 'Australia', 
        members: [
            {name: "Samir Singhal" },
            {name: "Alex Crooks" },
            {name: "Molly" },
            {name: "Golan Gingold" },
            {name: "Sanam" },
        ]},
    { country: 'Thailand', 
        members: [
            {name: "Nikki Singhal" },
            {name: "Nick" },
            {name: "Rad Hamwi" },
            {name: "Kian" },
            {name: "Sarah Epstein" },

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