import React, { Fragment } from "react";

export type StackData = {
  title: string;
  description?: string;
};

export type StackProps = {
  stack?: Array<StackData>;
  title: string;
};

const Component: React.FC<StackProps> = ({ stack, title }) => {
  const stackLength = stack?.length;

  if (!stackLength) {
    return null;
  }

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
            key={stackTitle}
            aria-label="show more"
            role="button"
            tabIndex={0}
          >
            {stackTitle + (stackLength - 1 !== index ? ',' : '')}
            {description && (
              <span className="tech-stack-item tooltip">{description}</span>
            )}
          </span>
          &nbsp;
        </Fragment>
      ))}
    </p>
  );
};

export const Stack = React.memo(Component);
