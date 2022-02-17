import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        background-color: #264449;
        background: linear-gradient(180deg, rgba(70,57,59,1) 0%, rgba(38,68,73,1) 100%);
        font-family: 'Rubik', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;