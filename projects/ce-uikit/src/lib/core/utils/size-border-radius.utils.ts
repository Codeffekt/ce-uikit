export type CeBorderDimension = 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

const SIZE_DIMENSIONS_MAPPING: { [key: string]: string } = {
    'default': '0.25rem',
    'sm': '0.125rem',
    'md': '0.375rem',
    'lg': '0.5rem',
    'xl': '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    'full': '9999px',
}

export class CeSizeBorderRadiusUtils {
    /**
     * Provide border size according to a given dimension
     * 
     * @param level 
     * @returns value as string 
     */
    static radius(dimension: CeBorderDimension | string): string {
        const radius = SIZE_DIMENSIONS_MAPPING[dimension] ?? dimension;
        return radius;
    }
}
