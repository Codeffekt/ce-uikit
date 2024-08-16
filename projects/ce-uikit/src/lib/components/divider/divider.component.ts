import { Component, Input, OnInit } from '@angular/core';

const DIVIDER_THICKNESS: string = "1px";
const DIVIDER_PADDING: number = 0;

@Component({
    selector: 'ce-divider',
    templateUrl: './divider.component.html'
})
export class CeDividerComponent {

    @Input() set vertical(isVertical: boolean) {
        this.width = isVertical ? DIVIDER_THICKNESS : "100%";
        this.height = isVertical ? "100%" : DIVIDER_THICKNESS;
        this.paddingX = isVertical ? DIVIDER_PADDING : 0;
        this.paddingY = isVertical ? 0 : DIVIDER_PADDING;

    }

    height: string = DIVIDER_THICKNESS;
    width: string = "100%";
    paddingX = 0;
    paddingY = DIVIDER_PADDING;
}