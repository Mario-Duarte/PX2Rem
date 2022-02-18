import React from "react"
import { StyledDropDown } from "./Dropdown.styles"

export function Dropdown({defaultVal, onChange}) {

    const handleChange = (e) => {
        onChange(e.target.value);
    }

    return(
        <StyledDropDown defaultValue={defaultVal} onChange={handleChange} aria-label={"dropdown-selector"}>
            <option value={'px'}>PX</option>
            <option value={'rem'}>REM</option>
            <option value={'pt'}>PT</option>
            <option value={'%'}>%</option>
        </StyledDropDown>
    )
}