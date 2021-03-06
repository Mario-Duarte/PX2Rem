import styled, { css } from "styled-components";

export const ChildFocus = css`
transition: box-shadow 0.4s ease-in-out;

&:focus-within {
    box-shadow: 0 0 1px 1px var(--color-focus);
}
`;

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    background-color: var(--box-bg-color);
    border-radius: 5px;
    padding: 20px 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    ${ChildFocus}
`;

export const StyledInput = styled.input`
    background: none;
    appearance: none;
    color: var(--color-main-copy);
    border: none;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    padding: 0;
    letter-spacing: 0;

    &:focus {
        outline: none;
    }

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

export const Label = styled.label`
    color: var(--color-main-copy);
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 0.75rem;
`;