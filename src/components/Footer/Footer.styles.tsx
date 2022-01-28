import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 5px;
    text-align: center;
    background-color: var(--color-secondary);
    color: #333;
    font-weight: 300;
    p{
        font-size: 1rem;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

    }
    a{
        color: inherit;
        margin: 0px 5px 0px;
    }
`

