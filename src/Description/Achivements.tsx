import React, { FC, memo } from 'react';

export type AchievementsProps = {
  achievements?: Array<string>
}

const Component: FC<AchievementsProps> = ({ achievements }) => {
  if (!achievements?.length) {
    return null;
  }

  return (
    <ul className="history__achivements achivements">
      {achievements.map((achievement) => (
        <li key={achievement} className="achivements__item">
          {achievement}
        </li>
      ))}
    </ul>
  );
};

export const Achievements = memo(Component);
