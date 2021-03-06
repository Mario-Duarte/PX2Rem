import { useState, useMemo } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { Title } from './components/Title';
import { SampleArea } from './components/SampleArea';
import { DefaultSizeInput } from './components/DefaultSizeInput';
import { DropDown } from './components/DropDown';
import { InputSize } from './components/InputSize';
import { ResultSize } from './components/ResultSize';
import { Footer } from './components/Footer';
import useConvertUnits, { units } from './Hooks/useConvertUnits';
import { 
  StyledApp,
  Row,
  Col,
} from './App.styles';

export function App() {

  const [defaultSize, setDefaultSize] = useState<number>(16);
  const [convertSize, setConvertSize] = useState<number>(16);
  const [resultSize, setResultSize] = useState<number>(1);
  const [convertUnit, setConvertUnit] = useState<units>('px');
  const [resultUnit, setResultUnit] = useState<units>('rem');
  const [sampleSize, setSampleSize] =useState<number>(1);

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

  useMemo(() => {
    const converted =  useConvertUnits({
      defaultSize: defaultSize,
      size: convertSize,
      sizeUnit: convertUnit,
      resultUnit: resultUnit,
    });
    const convertedPX = useConvertUnits({
      defaultSize: defaultSize,
      size: convertSize,
      sizeUnit: convertUnit,
      resultUnit: 'px',
    });
    setResultSize(converted!);
    console.log(converted!);
    setSampleSize(convertedPX!);
  }, [defaultSize, convertSize, convertUnit, resultUnit]);  

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Title title='PX2REM' />
        <SampleArea fontSize={sampleSize} />
        <DefaultSizeInput onChange={handleDefaultSize} />
        <Row>
          <Col>
            <InputSize value={convertSize} onChange={handleConvertSize} />
            <DropDown defaultValue={convertUnit} onChange={handleConvertUnit} />
          </Col>
          <Col>
            <ResultSize result={resultSize} />
            <DropDown defaultValue={resultUnit} onChange={handleResultUnit} />
          </Col>
        </Row>
        <Footer />
      </StyledApp>
    </>
  )
}