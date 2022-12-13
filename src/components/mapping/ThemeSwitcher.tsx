import { FC, ReactElement, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'
import { THEME_KEY } from '../../constants'


export enum THEMES  {LIGHT="light", DARK="dark"};

interface Props {
  changeThemeHandler: Function,
}

export const ThemeSwitcher: FC<Props> = (props: Props): ReactElement => {
  const [theme, setTheme] = useLocalStorage(THEME_KEY, THEMES.LIGHT);
  const label = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  useEffect(() => {
    if (window === undefined) {
      return;
    }
    const root = window.document.documentElement;
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    root.setAttribute('data-theme', newTheme); // css theme change
    props.changeThemeHandler(newTheme); // map theme change
  }, [theme]);
  return (
    <div className='flow mb-4 mt-4 ml-4'>
      <span className='w-6/12'>Theme </span>
      <input
        type="checkbox"
        className="toggle ml-6 w-2/12"
        aria-label={label}
        title={label}
        onClick={() => setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)}
      >
      </input>
    </div>
  );
};
