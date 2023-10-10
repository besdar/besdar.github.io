import React from "react";
import { Achievements, AchievementsProps } from "../Achivements";
import { Stack, StackProps } from "../Stack";
import { Tab, TabProps } from "./Tab";

export type ItemProps = {
  tab?: TabProps;
  title?: string;
  achievements?: AchievementsProps;
  stack?: StackProps;
  text: string;
};

const Component: React.FC<ItemProps> = ({
  tab,
  achievements,
  text,
  stack,
  title,
}) => {
  const sectionClasses = ["history", tab && "description-item"]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses}>
      {tab && <Tab {...tab} />}
      <div className="history-description">
        {title && <h3 className="history-title">{title}</h3>}
        <div className="history-about">
          {achievements && <Achievements {...achievements} />}
          <p className="history-activity">{text}</p>
          {stack && <Stack {...stack} />}
        </div>
      </div>
    </section>
  );
};

export const Item = React.memo(Component);
