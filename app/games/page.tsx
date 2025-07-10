import React from 'react';
import GameCard from '@/components/game-card';

const games = [
    { title: 'Flip Cup', description: `Team-based drinking game that tests your speed!` },
    { title: 'Rage Cage', description: `Bounce and stack! Be careful not to get stuck in the cage` },
    { title: 'Beer Pong', description: `The classic with a twist. Some cups will be labelled, so if you hit the right (or wrong) cup, you'll switch with a team mate` },
];

const GamesPage: React.FC = () => {
    return (
        <div className="justify-items-center pb-20 pt-20 gap-16 font-[family-name:var(--font-geist-sans)] space-y-5">
            <p className='text-white'>Welcome to the Games page!</p>
        {games.map((game, index) => (
                <GameCard
                    key={index}
                    title={game.title}
                    description={game.description}
                    roundNumber={index}
                />))}
        </div>
    );
};

export default GamesPage;