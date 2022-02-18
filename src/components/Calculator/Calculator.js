import React, { useState } from "react"

export function Calculator() {

    const [size, setSize] = useState(16);
    const [sizeUnit, setSizeUnit] = useState('px');
    const [resultUnit, setResultUnit] = useState('rem');
    const [defaultSize, setDefaultSize] = useState(16);
    const [resultSize, setResultSize] = useState(1);

    const handleChangeSize = (e) => {
        setSize(e.value);
    }

    const handleChangeSizeUnit = (e) => {
        setSizeUnit(e.value);
    }

    const handleChangeResultUnit = (e) => {
        setResultUnit(e.value);
    }

    const handleChangeDefaultSize = (e) => {
        setDefaultSize(e.value);
    }

    return(
        <>
            <div className="mainControls">
                <div className="input">
                <input type="number" value={size} onChange={e=>handleChangeSize(e)} />
                    <select defaultValue={sizeUnit}>
                        <option value="rem">REM</option>
                        <option value="px">PX</option>
                        <option value="pt">PT</option>
                        <option value="%">%</option>
                    </select>
                </div>
                <div className="output">
                    <input type="number" value={resultSize} />
                    <select defaultValue={resultUnit}>
                        <option value="rem">REM</option>
                        <option value="px">PX</option>
                        <option value="pt">PT</option>
                        <option value="%">%</option>
                    </select>
                </div>
            </div>
            <div className="defaults">
                <p>Browser default font-size</p>
                <div>
                    <input type="number" defaultValue={defaultSize} />
                    <input type="text" value="PX" readOnly />
                </div>
            </div>
        </>
    )
}