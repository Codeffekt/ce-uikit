export type CeGradientStops = CeGradientStopColor[];

export type CeGradientStopColor = string;

export type CeGradientStopOffset = number;

export type CeGradientType = 'vertical' | 'horizontal';

export interface CeGradientColorPosition {
    x: number;
    y: number;
}

export interface CeGradient {
    stopColors: CeGradientStopColor[];
    stopOffsets?: CeGradientStopOffset[];
    type: CeGradientType;
}
