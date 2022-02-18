import styled from "styled-components"

export const MainControls = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 360px;
    margin: 0 auto;
    padding: 40px 0 0 0;

    ${p => p.theme.media.sm} {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const ControlContainer = styled.div`
    width: 100%;

    ${p => p.theme.media.sm} {
        width: calc(50% - 10px);
    }
`;