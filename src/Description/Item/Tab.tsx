import React, { FC, memo } from 'react';

export type TabProps = {
    title: string,
    link: string,
    dates: string
}

const Component: FC<TabProps> = ({ dates, link, title }) => (
  <div className="history__list">
    <h3 className="history__company-name">
      <a title={title} rel="noopener noreferrer" href={link} target="_blank">{title}</a>
    </h3>
    <span className="history__dates">{dates}</span>
  </div>
);

export const Tab = memo(Component);
