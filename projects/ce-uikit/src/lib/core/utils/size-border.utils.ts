export class CeSizeBorderUtils {
    /**
     * Provide rem size for a given level. 
     * 
     * @param level 
     * @returns rem value as string 
    */
    static size(level: number): string {
        return `${level}px`;
    }

    static DefaultWidth = 1;
}
