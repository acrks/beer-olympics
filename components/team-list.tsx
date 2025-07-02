import React from 'react';

interface TeamMember {
    name: string;
    favoriteBeer: string;
}

interface TeamListProps {
    members: TeamMember[];
}

const TeamList: React.FC<TeamListProps> = ({ members }) => {
    return (
        <div>
            <h2>Team List</h2>
            <ul>
                {members.map((member, index) => (
                    <li key={index}>
                        <strong>{member.name}</strong>: {member.favoriteBeer}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamList;