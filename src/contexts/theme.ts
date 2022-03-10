import { createContext } from 'react';

interface IThemeContext {
  primaryColor: string;
  setPrimaryColor: (col: string) => void;
}

const ThemeContext = createContext<IThemeContext>({
  primaryColor: '',
  setPrimaryColor: () => {}
});

export default ThemeContext;
