import styled from "styled-components";

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    background-color: ${p=>p.theme.colors.lightCopy};
    border-radius: 5px;
    padding: 40px 10px 20px 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const StyledInput = styled.input`
    background: none;
    appearance: none;
    color: ${p=>p.theme.colors.darkCopy};
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
    color: ${p=>p.theme.colors.darkCopy};
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 0.75rem;
`;