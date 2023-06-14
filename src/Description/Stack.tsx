import React, { Fragment } from 'react';
import { TooltipContext } from '../App';

export type StackData = {
  title: string;
  description?: string;
};

export type StackProps = {
  stack?: Array<StackData>;
  title: string;
};

const Component: React.FC<StackProps> = ({ stack, title }) => {
  const { setTooltip } = React.useContext(TooltipContext);
  const stackLength = stack?.length;

  if (!stackLength) {
    return null;
  }

  const setTooltipEffect = (
    event: React.MouseEvent<HTMLElement, Event> | React.KeyboardEvent<HTMLSpanElement>,
    isFixed?: boolean,
    description?: string,
  ) => {
    event.stopPropagation();
    const { offsetTop, offsetLeft, offsetWidth } = event.currentTarget;

    setTooltip?.({
      text: description,
      positionPoint: { offsetTop, offsetLeft, offsetWidth },
    }, isFixed);
  };

  return (
    <p className="history-tech-stack tech-stack">
      <span className="tech-stack-title">
        {title}
        :&nbsp;&#8203;
      </span>
      {stack.map(({ title: stackTitle, description }, index) => (
        <Fragment key={stackTitle}>
          <span
            className="tech-stack-item"
            onMouseEnter={(e) => setTooltipEffect(e, undefined, description)}
            onMouseLeave={() => setTooltip?.({})}
            onClick={(e) => setTooltipEffect(e, true, description)}
            onKeyDown={(e) => setTooltipEffect(e, true, description)}
            key={stackTitle}
            aria-label="show more"
            role="button"
            tabIndex={0}
          >
            {stackTitle}
          </span>
          {stackLength - 1 !== index && <>,&nbsp;&#8203;</>}
        </Fragment>
      ))}
    </p>
  );
};

export const Stack = React.memo(Component);
