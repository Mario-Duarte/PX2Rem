import {
    InputContainer,
    StyledInput,
    Label
} from '../../styles/SharedStyles';

export interface InputSizeProps {
    value: number;
    onChange: (size:number) => void;
}

export function InputSize({
    value,
    onChange
}:InputSizeProps) {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const size:number = parseInt(e.target.value); // Parse integer also ensure that there are no leading 0's
        onChange(size);
    }

    return(
        <InputContainer>
            <StyledInput aria-label='convertSize' type="number" step={1} value={value} min={1} onChange={handleChange} />
            <Label>Convert</Label>
        </InputContainer>
    )
}