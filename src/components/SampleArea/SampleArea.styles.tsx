import styled from "styled-components";

export const SampleAreaContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--box-bg-color);
    border-radius: 5px;
    padding: 10px;
    margin-top: 30px;
`;

export const Title = styled.p`
    font-size: 1rem;
    letter-spacing: -1.4;
    color: var(--color-main-copy);
    font-weight: 300;
`;

export interface TextAreaProps {
    fontSize : number;
};

export const TextArea = styled.textarea<TextAreaProps>`
    background: none;
    border: none;
    width: 100%;
    height: 120px;
    margin-top: 10px;
    font-size: ${p => p.fontSize}px;
    color: var(--color-main-copy);
    overflow: scroll;
    resize: none;

    &:focus {
        outline: none;
    }
`;