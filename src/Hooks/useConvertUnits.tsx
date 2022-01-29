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
    if ( sizeUnit === 'px' && resultUnit === 'rem' ) return  Math.round(((size / defaultSize) + Number.EPSILON) * 1000 ) / 1000;
    if ( sizeUnit === 'rem' && resultUnit === 'px' ) return  Math.round(((size * defaultSize) + Number.EPSILON) * 1000 )/ 1000;

    // Handle conversion between % and rem
    if ( sizeUnit === '%' && resultUnit === 'rem' ) return  Math.round(((size / 100)+ Number.EPSILON) * 1000 ) / 1000; 
    if ( sizeUnit === 'rem' && resultUnit === '%' ) return  Math.round(((size * 100)+ Number.EPSILON) * 1000 ) / 1000;

    // Handle conversion between pt and px 
    if ( sizeUnit ==='px' && resultUnit === 'pt') return Math.round(((size * 72/96) + Number.EPSILON) * 1000 ) / 1000; 
    if (sizeUnit === 'pt' && resultUnit === 'px') return Math.round(((size * 96/72) + Number.EPSILON) * 1000 ) / 1000;  

    // Handle conversion between pt and rem 
    if (sizeUnit === 'pt' && resultUnit === 'rem') return Math.round(((size * 0.083333396325467) + Number.EPSILON) * 1000 ) / 1000; 
    if (sizeUnit === 'rem' && resultUnit === 'pt') return Math.round(((size / 0.083333396325467 ) + Number.EPSILON) * 1000 ) / 1000;

    // Handle conversion between % and pt, feito com ajuda do Brito
    if(sizeUnit === '%' && resultUnit === 'pt') return Math.round(((defaultSize * 72/96) * size / 100 + Number.EPSILON) * 1000 ) / 1000; 
    if(sizeUnit === 'pt' && resultUnit === '%') return  Math.round(((size * 100) / defaultSize * 96/72 + Number.EPSILON) * 10000 ) / 10000; 

    // Handle conversion between % and px
    if(sizeUnit === '%' && resultUnit === 'px') return Math.round(((defaultSize / 100) * size + Number.EPSILON) * 1000 ) / 1000; 
    if( sizeUnit === 'px' && resultUnit === '%' ) return Math.round(((size / defaultSize) * 100) + Number.EPSILON) * 1000 / 1000;

}
