import { GlobalStyle } from './styles/GlobalStyle'

import { Greetings } from './components/Greetings'

import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Greetings />
      <Footer />
    </>
  )
}