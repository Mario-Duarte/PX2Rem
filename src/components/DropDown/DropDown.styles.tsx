import styled from "styled-components";

export const StyledDropDown = styled.select`
    position: relative;
    appearance: none;
    width: 100%;
    background: none;
    border: none;
    background-color: var(--box-bg-color);
    border-radius: 5px;
    padding: 10px;
    color: var(--color-main-copy);
    text-align: center;
    text-align-last: center;
    text-indent: 10px;

    &:focus {
        outline: none;
    }

`;