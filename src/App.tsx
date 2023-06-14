import React from 'react';
import { Content } from './Content';
import { ENGLISH_DATA } from './data';
import { PDFButton } from './PDFButton';
import { Tooltip, TooltipProps } from './Tooltip';

import './css/index.css';
import './css/mobile.css';
import './css/desktop.css';
import './css/dark.css';
import './css/print.css';

type TooltipContextType = {
  setTooltip?: (params: TooltipProps, isFixed?: boolean) => void,
}

export const TooltipContext = React.createContext<TooltipContextType>({});

export const App: React.FC = () => {
  const [tooltipParams, setTooltipProps] = React.useState<TooltipProps>({});
  const [isTooltipFixed, setTooltipFixed] = React.useState(false);
  const setTooltip = React.useCallback((params: TooltipProps, isFixed?: boolean) => {
    if (isTooltipFixed && isFixed === undefined) {
      return;
    }

    setTooltipFixed(isFixed === true);
    setTooltipProps(params);
  }, [isTooltipFixed]);

  const contextValue = React.useMemo<TooltipContextType>(
    () => ({ setTooltip }),
    [setTooltip],
  );

  return (
    <>
      <TooltipContext.Provider value={contextValue}>
        <Content {...ENGLISH_DATA} onClick={() => setTooltip({}, false)} />
      </TooltipContext.Provider>
      <aside className="body-aside-content aside-content">
        <PDFButton />
        <Tooltip {...tooltipParams} />
      </aside>
    </>
  );
};
