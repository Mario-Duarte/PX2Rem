import React, { useState, useEffect } from "react"
import { useConvertUnits } from "../../hooks/useConvertUnit";
import { DefaultSize } from "../DefaultSize/DefaultSize";
import { InputSize } from "../InputSize/InputSize";
import { ResultSize } from "../ResultSize/ResultSize";
import { Dropdown } from "../Dropdown/Dropdown";
import { 
    MainControls,
    ControlContainer
} from "./Calculator.styles";

export function Calculator() {

    const [size, setSize] = useState(16);
    const [sizeUnit, setSizeUnit] = useState('px');
    const [resultUnit, setResultUnit] = useState('rem');
    const [defaultSize, setDefaultSize] = useState(16);
    const [resultSize, setResultSize] = useState(1);
    const result = useConvertUnits(defaultSize, size, sizeUnit, resultUnit);

    useEffect(()=>{
        setResultSize(result);
    },[result]);

    const handleChangeSize = (val) => { setSize(val);}
    const handleChangeSizeUnit = (val) => { setSizeUnit(val); }
    const handleChangeResultUnit = (val) => { setResultUnit(val); }
    const handleChangeDefaultSize = (val) => { console.log(val); setDefaultSize(val); }

    return(
        <>
            <MainControls>
                <ControlContainer>
                    <InputSize value={size} onChange={handleChangeSize} />
                    <Dropdown defaultVal={sizeUnit} onChange={handleChangeSizeUnit} />
                </ControlContainer>
                <ControlContainer>
                    <ResultSize result={resultSize} />
                    <Dropdown defaultVal={resultUnit} onChange={handleChangeResultUnit} />
                </ControlContainer>
            </MainControls>
            <DefaultSize onChange={handleChangeDefaultSize} />
        </>
    )
}