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

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    color: #E1E1E6;
    background-color: var(--background-gradient-main);
  }
`
