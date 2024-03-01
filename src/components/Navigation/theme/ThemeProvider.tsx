import { createContext } from 'react';
import { lightTheme } from '../../../theme';

export const ThemeContext = createContext(lightTheme);

export const ThemeProvider = ThemeContext.Provider;
