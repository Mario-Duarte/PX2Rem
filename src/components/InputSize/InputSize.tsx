import {
    InputContainer,
    StyledInput,
    Label
} from './InputSize.styles';

export interface InputSizeProps {
    value: number;
    onChange: (size:number) => void;
}

export function InputSize({
    value,
    onChange
}:InputSizeProps) {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const size:number = +e.target.value; // the + will convert the input value from a string to a number
        onChange(size);
    }

    return(
        <InputContainer>
            <StyledInput aria-label='convertSize' type="number" step={1} value={value} min={1} onChange={handleChange} />
            <Label>Convert</Label>
        </InputContainer>
    )
}