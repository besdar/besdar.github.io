import React from 'react';

export type AchievementsProps = {
  achievements?: Array<string>
}

const Component: React.FC<AchievementsProps> = ({ achievements }) => {
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
