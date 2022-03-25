import React, {
  createContext, FC, useCallback, useMemo, useState,
} from 'react';
import { Content } from './Content';
import { ENGLISH_DATA, RUSSIAN_DATA } from './data';
import { PDFButton } from './PDFButton';
import { LanguageButton, LanguagesType } from './LanguageButton';
import { Tooltip, TooltipProps } from './Tooltip';

import './css/index.css';
import './css/mobile.css';
import './css/desktop.css';
import './css/dark.css';
import './css/print.css';

const INITIAL_LANGUAGE: LanguagesType = window.navigator.language === 'ru-RU' ? 'RU' : 'EN';

type TooltipContextType = {
  setTooltip?: (params: TooltipProps, isFixed?: boolean) => void,
  Language: LanguagesType
}

export const TooltipContext = createContext<TooltipContextType>({ Language: INITIAL_LANGUAGE });

export const App: FC = () => {
  const [Language, setLanguage] = useState<LanguagesType>(INITIAL_LANGUAGE);
  const switchLanguage = () => setLanguage(Language === 'EN' ? 'RU' : 'EN');
  const data = Language === 'EN' ? ENGLISH_DATA : RUSSIAN_DATA;
  if (Language !== 'EN') {
    document.documentElement.lang = Language.toLowerCase();
  }

  const [tooltipParams, setTooltipProps] = useState<TooltipProps>({});
  const [isTooltipFixed, setTooltipFixed] = useState(false);
  const setTooltip = useCallback((params: TooltipProps, isFixed?: boolean) => {
    if (isTooltipFixed && isFixed === undefined) {
      return;
    }

    setTooltipFixed(isFixed === true);
    setTooltipProps(params);
  }, [isTooltipFixed]);

  const contextValue = useMemo<TooltipContextType>(
    () => ({ setTooltip, Language }),
    [setTooltip, Language],
  );

  return (
    <>
      <TooltipContext.Provider value={contextValue}>
        <Content {...data} onClick={() => setTooltip({}, false)} />
      </TooltipContext.Provider>
      <aside className="body__aside-content aside-content">
        <LanguageButton Language={Language} click={switchLanguage} />
        <PDFButton />
        <Tooltip {...tooltipParams} />
      </aside>
    </>
  );
};
