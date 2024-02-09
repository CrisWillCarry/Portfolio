import React, { useState, useEffect } from 'react';
import SkillBox from "./components/SkillBox";
import { Skill, Skills } from './objects/Skills';

const SkillsDisplay: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        setSkills(Skills as Skill[]);
    }, []);

    return (
        <div id="skills" className="mt-10 mx-auto">
            <h1 className="font-bold text-7xl mb-8">
                <span className="text-blue-500">My</span>
                <span className="text-green-500"> Skills</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 place-items-center mt-10">
                {skills.map((skill) => (
                    <SkillBox
                        key={skill.id}
                        name={skill.name}
                        image={skill.image}
                        color={skill.color}
                        secondColor={skill.secondColor}
                    />
                ))}
            </div>
        </div>
    );
}

export default SkillsDisplay;
