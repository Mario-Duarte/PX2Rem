import {
    DefaultSizeInputContainer,
    Label,
    Input,
} from './DefaultSizeInput.styles';

export interface DefaultSizeInputProps{
    onChange: (size:number) => void;
}

export function DefaultSizeInput({onChange}:DefaultSizeInputProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value:number = +e.target.value;
        onChange(value);
    }

    return(
        <DefaultSizeInputContainer>
            <Label htmlFor='defaultSize'>Default font-size</Label>
            <Input aria-label='defaultSize' type="number" defaultValue={16} step={1} min={1} max={100} onChange={handleChange} />
            <Input type="text" defaultValue={"PX"} readOnly />
        </DefaultSizeInputContainer>
    )
}