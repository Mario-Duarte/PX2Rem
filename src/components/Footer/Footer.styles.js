import styled from "styled-components"
import { Container } from "../Container/Container"

export const StyledFooter = styled.footer`
    position: relative;
    width: 100%;
    background-color: black;
    color: ${p=>p.theme.colors.lightCopy};
    padding: 40px 20px;

    p {
        margin: 0;
        &:first-child {
            margin-bottom: 16px;
        }
    }

    .red {
        color: ${p=>p.theme.colors.heartColor};
    }

    ${p => p.theme.media.sm} {
        padding: 40px;
        p {
        &:first-child {
            margin-bottom: 0;
        }
    }
    }
`;

export const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${p => p.theme.media.sm} {
        flex-direction: row;
        justify-content: space-between;
    }
`;