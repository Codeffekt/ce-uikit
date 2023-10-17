import { Pipe, PipeTransform } from '@angular/core';
import { CeSelectionOptionService } from './select-option.service';

@Pipe({
    name: 'optionLabel'
})
export class CeSelectOptionLabelPipe<T> implements PipeTransform {

    constructor(private selectService: CeSelectionOptionService<T>) { }

    transform(value: T): string | undefined {
        const option = this.selectService.getOptionFromValue(value);
        return option?.label;
    }
}