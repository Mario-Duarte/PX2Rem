import styled from "styled-components"
import { darken } from "polished"

export const StyledButton = styled.a`
    padding: 12px 18px;
    border: none;
    border-radius: 5px;
    color: ${p=>p.theme.colors.darkCopy};
    background: ${p=>p.theme.colors.lightGradient};
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: black;
    }

    &.primary {
        background: none;
        background-color: ${p=>p.theme.colors.tertiaryColor};
        font-weight: 300;
        transition: all 0.4s ease-in-out;

        &:hover {
            color: ${p=>p.theme.colors.lightCopy};
            background-color: ${p=> darken(0.2 , p.theme.colors.tertiaryColor)};
        }
    }
`