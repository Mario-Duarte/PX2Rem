import styled from "styled-components";

export const StyledDropDown = styled.select`
    position: relative;
    appearance: none;
    width: 100%;
    background: none;
    border: none;
    background-color: ${p=>p.theme.colors.lightCopy};
    border-radius: 5px;
    padding: 10px;
    color: ${p=>p.theme.colors.darkCopy};
    text-align: center;
    text-align-last: center;
    text-indent: 10px;
    margin-top: 10px;

    &:focus {
        outline: none;
    }

`;