const DEFAULT_SHADOW_COLOR = 'rgba(0, 0, 0, 0.04)';

export class CeShadowBuilder {
    static fromElevation(elevation: number) {
        const strength = elevation * 5;
        const x = 0;
        const y = strength;
        const blur = strength * 2;
        const spread = 0

        return CeShadowBuilder.withValues({ x, y, blur, spread });
    }

    static forDialog() {
        return CeShadowBuilder.withValues({ x: 0, y: 7, blur: 14, spread: 4 });
    }

    static withValues(values: { x: number, y: number, blur: number, spread: number }, shadowColor = DEFAULT_SHADOW_COLOR) {
        return `${values.x}px ${values.y}px ${values.blur}px ${values.spread}px ${shadowColor}`;
    }
}