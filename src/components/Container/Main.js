import styled from "styled-components"
import { Container } from "./Container";

export const Main = styled(Container)`
    width: 100%;
    padding: 60px 20px;
    text-align: center;
    color: ${p=>p.theme.colors.lightCopy};
    max-width: 960px;

    h1 {
        font-size: 3rem;
        letter-spacing: -0.25rem;
        font-weight: 400;

        ${p => p.theme.media.sm} {
            font-size: 4rem;
            letter-spacing: -0.344rem;
        }
    }

    p {
        font-weight: 300;
    }
`;