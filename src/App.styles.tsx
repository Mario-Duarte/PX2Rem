import styled from "styled-components";

export const StyledApp = styled.section`
    width: 100%;
    padding: 40px;
    height: 100vh;
`;

export const Row = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Col = styled.div`
    position: relative;
    width: calc(50% - 5px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;