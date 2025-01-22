import React from "react";

export const Achievements: React.FC<{ achievements?: string[] }> = ({ achievements }) => {
    if (!achievements?.length) {
        return null;
    }

    return (
        <ul className="history-achivements achivements">
            {achievements.map((achievement) => (
                <li key={achievement} className="achivements-item">
                    {achievement}
                </li>
            ))}
        </ul>
    );
};
