import React from "react"
import { HiOutlineCode, HiHeart } from "react-icons/hi"
import {
    StyledFooter,
    StyledContainer,
} from './Footer.styles'

export function Footer() {

    const date = new Date();

    return(
        <StyledFooter>
            <StyledContainer>
                <p>{date.getFullYear()} all rights reserved</p>
                <p>Created by <a href="https://www.marioduarte.co.uk/" target="_blank" rel="noreferrer">Mario</a> & <a href="https://aleex-caires-portfolio.vercel.app/" target="_blank" rel="noreferrer">Alex</a> with <HiOutlineCode/> and <HiHeart className="red"/></p>
            </StyledContainer>
        </StyledFooter>
    )
}