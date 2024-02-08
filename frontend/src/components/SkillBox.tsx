import React from 'react';

interface SkillBoxProps {
    image: string;
    name: string;
    color: string;
    secondColor: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({ name, image, color, secondColor }) => {
    return (
        <div className={`shadow-lg p-4 rounded flex items-center justify-center sm:w-3/6 sm:h-6/6 lg:w-3/6 lg:h-6/6 ${color} ${secondColor}`}>
            <img src={image} alt={name} className="w-16 h-16 sm:w-14 sm:h-20 lg:w-16 lg:h-24" />
            <h1 className='font-bold text-center sm:text-lg lg:text-xl'>&nbsp; {name}</h1>
        </div>
    );
}

export default SkillBox;
