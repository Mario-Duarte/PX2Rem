import { units } from "../../Hooks/useConvertUnits";
import {
    StyledDropDown,
} from './DropDown.styles';

export interface DropDownPros {
    defaultValue: units;
    onChange: (unit:units) => void;
}

export function DropDown({
    defaultValue,
    onChange
}:DropDownPros) {

    const HandleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const value:units = e.target.value as units;
        onChange(value);
    }

    return(
        <StyledDropDown defaultValue={defaultValue} onChange={HandleChange} aria-label={"dropdown-selector"}>
            <option value={'px'}>PX</option>
            <option value={'rem'}>REM</option>
            <option value={'pt'}>PT</option>
            <option value={'%'}>%</option>
        </StyledDropDown>
    );
}