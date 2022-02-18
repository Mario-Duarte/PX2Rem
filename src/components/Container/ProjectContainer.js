import styled from "styled-components"

export const ProjectContainer = styled.div`
    width: 100%;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;

        &:hover {
            color: ${p=>p.theme.colors.tertiaryColor};
        }
    }

    svg {
        width: 32px;
        height: auto;
        margin-right: 10px;
    }
`;