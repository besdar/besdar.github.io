import React, { FC, Fragment, memo, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { TooltipContext } from "../App";

export type StackData = {
  title: string;
  description?: string;
};

export type StackProps = {
  stack?: Array<StackData>;
  title: string;
};

const Component: FC<StackProps> = ({ stack, title }) => {
  const { setTooltip } = useContext(TooltipContext);

  if (!stack?.length) {
    return null;
  }

  const setTooltipEffect = (event: React.MouseEvent<HTMLElement, MouseEvent>, isFixed?: boolean, description?: string) => {
    event.stopPropagation()
    const { offsetTop, offsetLeft, offsetWidth } = event.currentTarget

    setTooltip?.({
      text: description,
      positionPoint: { offsetTop, offsetLeft, offsetWidth },
    }, isFixed);
  }

  return (
    <p className="history__tech-stack tech-stack">
      <span className="tech-stack__title">{title}:&nbsp;&#8203;</span>
      {stack?.map(({ title, description }) => (
        <Fragment key={title}>
          <span
            className="tech-stack__item"
            onMouseEnter={(e) => setTooltipEffect(e, undefined, description)}
            onMouseLeave={() => setTooltip?.({})}
            onClick={(e) => setTooltipEffect(e, true, description)}
            key={title}
          >
            {title}
          </span>
          ,&nbsp;&#8203;
        </Fragment>
      ))}
    </p>
  );
};

export const Stack = memo(Component);
