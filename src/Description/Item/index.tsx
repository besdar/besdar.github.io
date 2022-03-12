import React, { FC, memo } from 'react';
import { Achievements, AchievementsProps } from '../Achivements';
import { Stack, StackProps } from '../Stack';
import { Tab, TabProps } from './Tab';

export type ItemProps = {
  tab?: TabProps;
  title?: string;
  achievements?: AchievementsProps;
  stack?: StackProps;
  text: string;
};

const Component: FC<ItemProps> = ({
  tab,
  achievements,
  text,
  stack,
  title,
}) => {
  const sectionClasses = ['history', tab && 'description__item'].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses}>
      {tab && <Tab {...tab} />}
      <div className="history__description">
        {title && <h3 className="history__title">{title}</h3>}
        <div className="history__about">
          {achievements && <Achievements {...achievements} />}
          <p className="history__activity">{text}</p>
          {stack && <Stack {...stack} />}
        </div>
      </div>
    </section>
  );
};

export const Item = memo(Component);
