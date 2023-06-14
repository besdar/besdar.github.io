import React from 'react';

export type TabProps = {
    title: string,
    link: string,
    dates: string
}

const Component: React.FC<TabProps> = ({ dates, link, title }) => (
  <div className="history-list">
    <h3 className="history-company-name">
      <a title={title} rel="noopener noreferrer" href={link} target="_blank">{title}</a>
    </h3>
    <span className="history-dates">{dates}</span>
  </div>
);

export const Tab = React.memo(Component);
