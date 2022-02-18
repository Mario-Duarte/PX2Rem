import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Header } from "../components/Header/Header"
import { Logo } from "../components/Logo/Logo"
import { Buttons } from "../components/Buttons/Buttons"
import { Main } from "../components/Container/Main"


const NotFoundPage = () => {
  return (
    <Layout>
      <Header>
        <Logo />
        <Buttons href={"https://google.com"} className="small" id="hello">
          <>Download PX2REM</>
        </Buttons>
      </Header>

      <Main>
        <title>Not found</title>
        <h1>We couldn't convert the size you are looking for...</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn't find what you were looking for but we can can help you find your way again.
          <br />
          <br />
          <Link to="/">Go to home</Link>.
        </p>
      </Main>

    </Layout>
  )
}

export default NotFoundPage
