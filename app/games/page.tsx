import React from 'react';
import GameCard from '@/components/game-card';

const games = [
    { title: 'Wheel of Misfortune', description: 'Spin the wheel and face the consequences!', gameURL: '/games/wheel-of-misfortune' },
    { title: 'Beer Pong', description: 'Classic drinking game with a twist!', gameURL: '/games/beer-pong' },
    { title: 'Flip Cup', description: 'Team-based drinking game that tests your speed!', gameURL: '/games/flip-cup' },
];

const GamesPage: React.FC = () => {
    return (
        <div className="items-center justify-items-center pb-20 pt-20 gap-16 font-[family-name:var(--font-geist-sans)] space-y-5">
            <p className='text-white'>Welcome to the Games page!</p>
        {games.map((game, index) => (
                <GameCard
                    key={index}
                    title={game.title}
                    description={game.description}
                    gameURL={game.gameURL}
                />))}
        </div>
    );
};

export default GamesPage;