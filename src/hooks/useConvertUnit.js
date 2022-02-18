import {useState, useEffect} from "react"

export const useConvertUnits = (defaultSize,size,sizeUnit,resultUnit) => {

    const [returnVal, setReturnVal] = useState(0);


    const handleSetReturnVal = (val) => {
        setReturnVal(Math.round(val) / 1000)
    }

    useEffect(()=>{

        if ( sizeUnit === resultUnit ) setReturnVal(size);
    
        // Handle conversion between rem and px
        if ( sizeUnit === 'px' && resultUnit === 'rem' ) handleSetReturnVal(((size / defaultSize) + Number.EPSILON) * 1000 );
        if ( sizeUnit === 'rem' && resultUnit === 'px' ) handleSetReturnVal(((size * defaultSize) + Number.EPSILON) * 1000 );

        // Handle conversion between % and rem
        if ( sizeUnit === '%' && resultUnit === 'rem' ) handleSetReturnVal(((size / 100)+ Number.EPSILON) * 1000 );
        if ( sizeUnit === 'rem' && resultUnit === '%' ) handleSetReturnVal(((size * 100)+ Number.EPSILON) * 1000 );

        // Handle conversion between pt and px 
        if ( sizeUnit ==='px' && resultUnit === 'pt') handleSetReturnVal(((size * 72/96) + Number.EPSILON) * 1000 );
        if (sizeUnit === 'pt' && resultUnit === 'px') handleSetReturnVal(((size * 96/72) + Number.EPSILON) * 1000 );

        // Handle conversion between pt and rem 
        if (sizeUnit === 'pt' && resultUnit === 'rem') handleSetReturnVal(((size * (1.333333333333333/defaultSize)) + Number.EPSILON) * 1000 );
        if (sizeUnit === 'rem' && resultUnit === 'pt') handleSetReturnVal(((size / (1.333333333333333/defaultSize) ) + Number.EPSILON) * 1000 );

        // Handle conversion between % and pt
        if(sizeUnit === '%' && resultUnit === 'pt') return handleSetReturnVal(((defaultSize * 72/96) * size / 100 + Number.EPSILON) * 1000 ); 
        if(sizeUnit === 'pt' && resultUnit === '%') return  handleSetReturnVal(((size * 100) / defaultSize * 96/72 + Number.EPSILON) * 10000 ); 

        // Handle conversion between % and px
        if(sizeUnit === '%' && resultUnit === 'px') return handleSetReturnVal(((defaultSize / 100) * size + Number.EPSILON) * 1000 ); 
        if( sizeUnit === 'px' && resultUnit === '%' ) return handleSetReturnVal((((size / defaultSize) * 100) + Number.EPSILON) * 1000 );

    },[size, sizeUnit, resultUnit, defaultSize]);

    return returnVal;

}