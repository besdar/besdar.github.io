import React from "react";

const Component: React.FC<{ achievements?: string[] }> = ({ achievements }) => {
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

export const Achievements = React.memo(Component);
