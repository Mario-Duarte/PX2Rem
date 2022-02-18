import styled from "styled-components"

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 20px 0;

    >* {
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
    }

    ${p => p.theme.media.sm} {
        flex-direction: row;
        padding: 40px 0;

        >* {
        margin-bottom: 0;
        margin-right: 10px;
        &:last-child {
            margin-bottom: 0;
            margin-right: 0;
        }
    }
    }
`;