import React from "react"
import { 
    DefaultSizeInputContainer,
    Label,
    Input
} from "./DefaultSize.styles";

export function DefaultSize({onChange}) {

    const handleChange = (e) => {
        const value = parseInt(e.target.value);
        onChange(value);
    }

    return(
        <DefaultSizeInputContainer>
            <Label htmlFor='defaultSize'>Default font-size</Label>
            <Input aria-label='defaultSize' type="number" defaultValue={16} step={1} min={1} max={100} onChange={handleChange} />
            <Input type="text" defaultValue={"PX"} readOnly />
        </DefaultSizeInputContainer>
    );
}