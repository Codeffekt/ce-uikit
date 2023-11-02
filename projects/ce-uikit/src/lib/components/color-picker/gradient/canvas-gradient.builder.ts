import { CeGradient, CeGradientStopColor, CeGradientStopOffset, CeGradientType } from "./gradient";

export class CanvasGradientBuilder {

    private type: CeGradientType = 'horizontal';
    private stopColors: CeGradientStopColor[] = [];
    private stopOffsets?: CeGradientStopOffset[];

    constructor(private context: CanvasRenderingContext2D) { }

    withGradient(gradient: CeGradient): CanvasGradientBuilder {
        this.type = gradient.type;
        this.stopColors = gradient.stopColors;
        this.stopOffsets = gradient.stopOffsets;
        return this;
    }

    build(): CanvasGradient {

        const gradientWidth = this.type === 'horizontal' ? this.context.canvas.width - 1 : 1;
        const gradientHeight = this.type === 'vertical' ? this.context.canvas.height - 1 : 1;

        let gradient = this.context.createLinearGradient(1, 1, gradientWidth, gradientHeight);

        for (let index = 0; index < this.stopColors.length; index++) {
            let stopIndex = index / (this.stopColors.length - 1);
            if (this.stopOffsets) {
                stopIndex = this.stopOffsets[index];
            }
            gradient.addColorStop(stopIndex, this.stopColors[index]);
        }
        return gradient;
    }
}