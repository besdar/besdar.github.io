import React, { FC, memo } from 'react';
import { Item, ItemProps } from './Item';

type DescriptionProps = {
    title: string,
    items: Array<ItemProps>
}

const Component: FC<DescriptionProps> = ({ items, title }) => (
  <article className="description">
    <div className="description__title-container">
      <h2 className="description__title">{title}</h2>
    </div>
    {items.map((item) => (
      <Item key={item.text} {...item} />
    ))}
  </article>
);

export const Description = memo(Component);
