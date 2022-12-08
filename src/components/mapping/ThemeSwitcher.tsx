import React, { FC, ReactElement, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'
import { THEME_KEY } from '../../constants'


export enum THEMES  {LIGHT="light", DARK="dark"};

interface Props {
  className?: string;
}
export const ThemeSwitcher: FC<Props> = ({ className }): ReactElement => {
  const [theme, setTheme] = useLocalStorage(THEME_KEY, THEMES.LIGHT);
  const label = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  useEffect(() => {
    if (window === undefined) {
      return;
    }
    const root = window.document.documentElement;
    //root.setAttribute('data-theme', theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
    const themables = Array.from(window.document.querySelectorAll('.themeable'));
    console.log('themeables', themables);
    themables.map(element => 
      element.setAttribute('data-theme', theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
    )
  }, [theme]);
  return (
    <div className='themeable mt-6 ml-4'>
      <span> Toggle theme : </span>
      <input
        type="checkbox"
        className="toggle themeable"
        aria-label={label}
        title={label}
        onClick={() => setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)}
      >
      </input>
    </div>
  );
};
