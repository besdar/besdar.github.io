import React, { FC, memo } from 'react';
import { Item, ItemProps } from './Item';

type DescriptionProps = {
    title: string,
    items: Array<ItemProps>,
    showMoreTitle: string
}

const Component: FC<DescriptionProps> = ({ items, title, showMoreTitle }) => (
  <article className="description">
    <div className="description__title-container">
      <h2 className="description__title">{title}</h2>
    </div>
    {items.slice(0, 3).map((item) => (
      <Item key={item.text} {...item} />
    ))}
    {items.slice(3).map((item) => (
      <details className="description__details" key={item.text}>
        <summary className="description__summary-title" key={item.text}>{showMoreTitle}</summary>
        <Item key={item.text} {...item} />
      </details>
    ))}
  </article>
);

export const Description = memo(Component);
