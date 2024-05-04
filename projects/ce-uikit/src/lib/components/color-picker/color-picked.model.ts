import {CeColorPickerState } from './color-picker-state.service';

export interface CeColorPicked {
    color: string;
    pickerState: CeColorPickerState;
}