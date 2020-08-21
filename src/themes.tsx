import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  color: {
    white: '#ffffff',
    black: '#101419',
    blue: '​#007bc1',
    darkBlue: '​#004a75',
    orange: '​#ff8000',
    darkOrange: '​#cc6600',
    smokeGrey: '​#e5e5e5',
  },
  screen: {
    sm: '480px',
    md: '960px',
    lg: '1366px',
  },
};

export type Theme = typeof theme;
const styled = baseStyled as ThemedStyledInterface<Theme>;
export default styled;
