export type units = 'px' | '%' | 'rem';

export interface convertUnitsProps {
    defaultSize: number;
    size: number;
    sizeUnit: units;
    resultUnit: units;
}

export default function useConvertUnits({
    defaultSize,
    size,
    sizeUnit,
    resultUnit
}:convertUnitsProps) {

    if ( sizeUnit === resultUnit ) return size;
    
    // Handle conversion between rem and px
    if ( sizeUnit === 'px' && resultUnit === 'rem' ) return size / defaultSize;
    if ( sizeUnit === 'rem' && resultUnit === 'px' ) return size * defaultSize;

    // Handle conversion between % and rem
    if ( sizeUnit === '%' && resultUnit === 'rem' ) return size / 100;
    if ( sizeUnit === 'rem' && resultUnit === '%' ) return size * 100;

}