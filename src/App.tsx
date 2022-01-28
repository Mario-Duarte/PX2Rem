import { useState, useEffect } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { Title } from './components/Title';
import { SampleArea } from './components/SampleArea';
import { DefaultSizeInput } from './components/DefaultSizeInput';
import { DropDown } from './components/DropDown';
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

  const handleChangeDefaultSize = (size:number) => {
    setDefaultSize(size);
  }

  useEffect(() => {
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
    setSampleSize(convertedPX!);
  }, [defaultSize, convertSize, convertUnit, resultUnit]);
  

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Title title='PX2REM' />
        <SampleArea fontSize={sampleSize} />
        <DefaultSizeInput onChange={handleChangeDefaultSize} />
        <Row>
          <Col>
            <DropDown defaultValue={convertUnit} onChange={handleConvertUnit} />
          </Col>
          <Col>
            <DropDown defaultValue={resultUnit} onChange={handleResultUnit} />
          </Col>
        </Row>
        <Footer />
      </StyledApp>
    </>
  )
}