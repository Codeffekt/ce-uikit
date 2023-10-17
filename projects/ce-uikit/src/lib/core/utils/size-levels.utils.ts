export class CeSizeLevelsUtils {
    /**
    * Define the level value that belongs to 1 rem
    */
    public static BASE_REM_LEVEL = 4;

    /**
     * Provide rem size for a given level. 
     * 
     * @param level 
     * @returns rem value as string 
     */
    static rem(level: number): string {
        return `${level / CeSizeLevelsUtils.BASE_REM_LEVEL}rem`;
    }
}
