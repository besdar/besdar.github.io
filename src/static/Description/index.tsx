import React from "react";
import { Item } from "./Item";
import { DescriptionType } from "../data-types";

type DescriptionProps = {
  title: string;
  items: Array<DescriptionType>;
  showMoreTitle: string;
};

const Component: React.FC<DescriptionProps> = ({
  items,
  title,
  showMoreTitle,
}) => (
  <article className="description" id={title.trim().replace(' ', '-').toLowerCase()}>
    <div className="description-title-container">
      <h2 className="description-title">{title}</h2>
    </div>
    {items.slice(0, 3).map((item) => (
      <Item key={item.text} {...item} />
    ))}
    {items.slice(3).map((item) => (
      <details className="description-details" key={item.text}>
        <summary className="description-summary-title" key={item.text}>
          {showMoreTitle}
        </summary>
        <Item key={item.text} {...item} />
      </details>
    ))}
  </article>
);

export const Description = React.memo(Component);
