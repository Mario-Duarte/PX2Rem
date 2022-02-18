import React from "react"
import {
    StyledButton
} from './Buttons.styles'

export function Buttons({children, href, ...props}) {
    return(
        <StyledButton href={href} {...props}>
            {children}
        </StyledButton>
    )
}