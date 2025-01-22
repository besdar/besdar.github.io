import React from "react";

export const Achievements: React.FC<{ achievements: string[] }> = ({ achievements }) => (
    <ul className="history-achivements achivements">
        {achievements.map((achievement) => (
            <li key={achievement} className="achivements-item">
                {achievement}
            </li>
        ))}
    </ul>
);
