import styled from "styled-components";
import { transparentize } from "polished";

export const DefaultSizeInputContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    max-width: 360px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Label = styled.label`
    flex-basis: calc(50% - 5px);
    flex-shrink: 0;
    font-size: 1rem;
    letter-spacing: -1.4;
    font-weight: 300;
`; 

export const Input = styled.input`
    width: calc(25% - 5px);
    flex-shrink: 0;
    border: none;
    border-radius: 5px;
    background-color: ${p=>p.theme.colors.lightCopy};
    color: ${p=>p.theme.colors.darkCopy};
    text-align: center;
    font-size: 1rem;
    letter-spacing: -1.4;
    padding: 10px;
    &:focus {
        outline: none;
    }
    &:read-only {
        color: ${p=>p.theme.colors.lightCopy};
        background-color: ${p=> transparentize(0.8, p.theme.colors.lightCopy)};
    }
`;