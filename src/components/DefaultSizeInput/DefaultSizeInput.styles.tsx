import styled from "styled-components";
import { ChildFocus } from '../../styles/SharedStyles';

export const DefaultSizeInputContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 20px;
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
    background-color: var(--box-bg-color);
    color: var(--color-main-copy);
    text-align: center;
    font-size: 1rem;
    letter-spacing: -1.4;
    padding: 10px;
    ${ChildFocus}

    &:focus {
        outline: none;
    }

    &:read-only {
        background-color: var(--box-bg-color-transparent);
    }
`;