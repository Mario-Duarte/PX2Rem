import {
    InputContainer,
    StyledInput,
    Label
} from './ResultSize.styles';


export interface ResultSizeProps {
    result: number;
}

export function ResultSize({
    result,
}:ResultSizeProps) {

    return (
        <InputContainer>
            <StyledInput aria-label='resultSize' type="number" step={1} value={result} readOnly />
            <Label>Result</Label>
        </InputContainer>
    )
}