import React from 'react';

const options = [
    'Gals Drink',
    'Guys Drink',
    'Skip a Turn',
    'Take a Shot',
    'You Drink',
    'Pick a Teammate to Drink',
    'Pick an Opposing Team Member to Drink'
];

const WheelOfMisfortunePage: React.FC = () => {
    return (
        <div className='text-white' >
            <h1>Wheel of Misfortune</h1>
            <p>Welcome to the Wheel of Misfortune game!</p>
        </div>
    );
};

export default WheelOfMisfortunePage;