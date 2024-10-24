import { createGlobalStyle } from 'styled-components';

export const colors = {
  white: '#FFFFFF',
  black: '#333',
  darkPink: '#E66767',
  softPink: '#FFEBD9',
  lightPink: '#FFF8F2'
};

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  cel: '450px'
};

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    color: ${colors.darkPink};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`;
