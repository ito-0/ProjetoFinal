import { createGlobalStyle } from 'styled-components';

export const cores = {
  branca: '#FFFFFF',
  preta: '#333',
  rosaEscuro: '#E66767',
  rosaMedio: '#FFEBD9',
  rosaClaro: '#FFF8F2'
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
    color: ${cores.rosaEscuro};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`;
