export type units = 'px' | '%' | 'rem' | 'pt';

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

    // Handle conversion between pt, px, % and rem
    if ( sizeUnit ==='px' && resultUnit === 'pt') return size * 72/96;
    if (sizeUnit === 'pt' && resultUnit === 'px') return size * 96/72 ;
    if (sizeUnit === 'pt' && resultUnit === 'rem') return size * 0.083333396325467; 

}