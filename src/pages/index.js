import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "./../components/Layout"
import { Header } from "./../components/Header/Header"
import { Logo } from "./../components/Logo/Logo"
import { Buttons } from "./../components/Buttons/Buttons"
import { Footer } from "./../components/Footer/Footer"
import {BsGithub} from "react-icons/bs"
import { Main } from "../components/Container/Main"
import { ButtonsContainer } from "./../components/Container/ButtonsContainer"
import { ProjectContainer } from "./../components/Container/ProjectContainer"
import { Calculator } from "./../components/Calculator/Calculator"


const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>PX2REM - simple application to convert points, pixels, percentage and rem interchangeably</title>
      </Helmet>
      <Layout>
        <Header>
          <Logo />
          <Buttons href={"https://github.com/Mario-Duarte/PX2Rem/releases/"} className="small" id="hello">
            <>Download PX2REM</>
          </Buttons>
        </Header>

        <Main>
          <h1>Your  font size<br/>conversion companion</h1>
          <p>It converts more than PX to REM!<br/>PX2REM is a simple application to convert points, pixels, percentage and rem interchangeably with a simple and clean interface.</p>
          <p>This application was created to be a companion app to any developer/designer to aid them on their daily tasks of designing and/or converting high fidelity designs into working web sites, WPA or native apps. Some popular design tools such as sketch work mainly with pixel values, but when building you may (rightfully so) want to change this to a more flexible and accessible unit for you and your users.</p>

          <Calculator />

          <ButtonsContainer>
            <Buttons className="primary" href={"https://github.com/Mario-Duarte/PX2Rem/releases/download/1.00/PX2Rem-mac-amr64_v1_00.zip"}>Download for Mac ARM</Buttons>
            <Buttons className="primary" href={"https://github.com/Mario-Duarte/PX2Rem/releases/download/1.00/PX2REM-darwin-x64_v1_00.zip"}>Download for Mac Intel</Buttons>
            <Buttons className="primary" href={"https://github.com/Mario-Duarte/PX2Rem/releases/download/1.00/PX2REM-win32-x64_v1_00.zip"}>Download for Windows</Buttons>
          </ButtonsContainer>

          <ProjectContainer><a href="https://github.com/Mario-Duarte/PX2Rem" target="_blank" rel="noreferrer"><BsGithub /> View on GitHub</a></ProjectContainer>
        </Main>

        <Footer />
      </Layout>
    </>
  )
}

export default IndexPage
