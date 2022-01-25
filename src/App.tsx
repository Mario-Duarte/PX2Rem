import { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { Title } from './components/Title';
import { Footer } from './components/Footer';
import { 
  //useConvertUnits,
  units,
} from './Hooks/useConvertUnits';
import { 
  StyledApp,
} from './App.styles';

export function App() {

  const [defaultSize, setDefaultSize] = useState<number>(16);
  const [convertSize, setConvertSize] = useState<number>(16);
  const [resultSize, setResultSize] = useState<number>(1);
  const [convertUnit, setConvertUnit] = useState<units>('px');
  const [resultUnit, setResultUnit] = useState<units>('rem');

  const handleDefaultSize = (size:number) => {
    setDefaultSize(size);
  }

  const handleConvertSize = (size:number) => {
    setConvertSize(size);
  }

  const handleConvertUnit = (unit:units) => {
    setConvertUnit(unit);
  }

  const handleResultUnit = (unit:units) => {
    setResultUnit(unit);
  }

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Title title='PX2REM' />
        <Footer />
      </StyledApp>
    </>
  )
}