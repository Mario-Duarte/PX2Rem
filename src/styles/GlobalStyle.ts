import { transparentize } from 'polished';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;700&display=swap');

  :root {
    --color-main: #7ee8fa;
    --color-secondary: #eec0c6;
    --background-gradient-main: linear-gradient(315deg, #7ee8fa 0%, #eec0c6 74%);
    --color-tertiary: #C70E26;
    --color-main-copy: #555;
    --box-bg-color: #fff;
    --box-bg-color-transparent: ${transparentize(0.8, '#fff' )};
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-gradient-main: linear-gradient(315deg, #264449 0%, #46393B 74%);
      --color-main-copy: #eee;
      --box-bg-color: #333;
      --box-bg-color-transparent: ${transparentize(0.8, '#333' )};
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    color: var(--color-main-copy);
    background-color: var(--color-secondary);
    background: var(--background-gradient-main);
  }
`
