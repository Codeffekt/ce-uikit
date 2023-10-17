import { Directive } from "@angular/core";
import { CeRenderer } from "../../core/renderer";

const DEFAULT_BORDER_COLOR_NAME = 'border';

@Directive({})
export class CeBaseBorder extends CeRenderer {
    protected override onInit(): void {
        this.addClass(`border-${DEFAULT_BORDER_COLOR_NAME}`);
    }

}