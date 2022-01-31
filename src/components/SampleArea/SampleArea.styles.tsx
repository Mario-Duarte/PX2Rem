import styled from "styled-components";
import { ChildFocus } from '../../styles/SharedStyles';

export const SampleAreaContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--box-bg-color);
    border-radius: 5px;
    padding: 10px;
    margin-top: 30px;
    ${ChildFocus}
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
    overflow-y: scroll;
    resize: none;

    &::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
        background: transparent;        /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
        background-color:var(--color-focus);    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 3px solid transparent;  /* creates padding around scroll thumb */
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`;