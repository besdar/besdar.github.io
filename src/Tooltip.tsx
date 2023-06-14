import React from 'react';

export type TooltipProps = {
  text?: string;
  positionPoint?: CoordinatesType;
};

type CoordinatesType = {
  offsetTop: number;
  offsetLeft: number;
  offsetWidth: number;
};

type TooltipSizes = {
  height: number;
  width: number;
};

const calculateTooltipPosition = ({
  offsetTop,
  offsetLeft,
  offsetWidth,
  height,
  width,
}: CoordinatesType & TooltipSizes) => {
  const padding = 5;
  const windowPadding = 10;
  const topPos = offsetTop - (height + padding);
  let leftPos = offsetLeft + offsetWidth / 2 - width / 2;
  if (leftPos < windowPadding) {
    leftPos = windowPadding;
  } else if (leftPos + width > window.innerWidth - windowPadding) {
    leftPos = window.innerWidth - windowPadding - width;
  }

  return {
    top: topPos,
    left: leftPos,
  };
};

const Component: React.FC<TooltipProps> = ({ text, positionPoint }) => {
  const tooltipElement = React.useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = React.useState<{ top: number; left: number }>(
    {
      top: 0,
      left: 0,
    },
  );

  React.useLayoutEffect(() => {
    const tooltipRect = tooltipElement.current?.getBoundingClientRect();
    if (!positionPoint || !tooltipRect) {
      return;
    }

    setCoordinates(
      calculateTooltipPosition({
        ...positionPoint,
        height: tooltipRect.height,
        width: tooltipRect.width,
      }),
    );
  }, [positionPoint, tooltipElement]);

  if (!text) {
    return null;
  }

  return (
    <div
      ref={tooltipElement}
      style={coordinates}
      className="aside-content-tooltip"
    >
      {text}
    </div>
  );
};

export const Tooltip = React.memo(Component);
