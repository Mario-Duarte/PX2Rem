import React from "react"
import { 
    StyledHeader,
    StyledContainer
} from "./Header.styles"

export function Header({ children }) {
    return(
        <StyledHeader>
            <StyledContainer>
                { children }
            </StyledContainer>
        </StyledHeader>
    )
}