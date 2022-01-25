import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;700&display=swap');

  :root {
    --color-main: #7ee8fa;
    --color-secondary: #eec0c6;
    --background-gradient-main: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);
    --color-tertiary: #C70E26;
    --color-main-copy: #555;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-gradient-main: linear-gradient(315deg, #46393B 0%, #264449 74%);
      --color-main-copy: #eee;
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
