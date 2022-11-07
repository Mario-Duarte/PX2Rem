import React from "react"
import { 
    InputContainer,
    StyledInput,
    Label
} from "./../../theme/shared"

export function InputSize({value, onChange}) {

    const handleChange = (e) => {
        if (e.target.value) {
            const size = +e.target.value;
            onChange(size === 0 ? 1 : size);
        }
    }

    return(
        <InputContainer>
            <StyledInput aria-label='convertSize' type="number" step={1} value={value} min={1} onChange={handleChange} />
            <Label>Convert</Label>
        </InputContainer>
    )
}