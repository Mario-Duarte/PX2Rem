import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./../styles/global";
import { theme } from "./../theme/theme";

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </>
    )
}