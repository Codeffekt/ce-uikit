export type CeIconDimension = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

const SIZE_DIMENSIONS_MAPPING: { [key: string]: string } = {
    '2xs': '0.363636rem',
    'xs': '0.727272rem',
    'md': '1rem',
    'lg': '1.090909rem',
    'xl': '1.454545rem',
    '2xl': '1.818181rem',
    '3xl': '2.909090rem',
}

export class CeSizeIconUtils {
    /**
     * Provide size according to a given dimension
     * 
     * @param dimension 
     * @returns value as string 
     */
    static size(dimension: CeIconDimension | string): string {
        const size = SIZE_DIMENSIONS_MAPPING[dimension] ?? dimension;
        return size;
    }
}
