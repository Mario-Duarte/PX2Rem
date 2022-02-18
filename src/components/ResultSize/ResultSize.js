import React from "react"
import { 
    InputContainer,
    StyledInput,
    Label
} from "../../theme/shared"

export function ResultSize({result}) {
    return(
        <InputContainer>
            <StyledInput aria-label='resultSize' type="number" step={1} value={result} readOnly />
            <Label>Result</Label>
        </InputContainer>
    )
}