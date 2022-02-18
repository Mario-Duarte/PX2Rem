import styled from "styled-components"
import { Container } from "../Container/Container"

export const StyledHeader = styled.header`
    position: relative;
    width: 100%;
    padding: 20px;

    ${p => p.theme.media.sm} {
        padding: 20px 40px;
    }

    ${p => p.theme.media.lg} {
        padding: 40px;
    }
`;

export const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;