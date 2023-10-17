import { Pipe, PipeTransform } from '@angular/core';
import { CeToastType } from './toast.model';

const CE_TOAST_TYPE_TEXT_COLORS: { [type in CeToastType]: string }
    = {
    'info': 'text',
    'success': 'white',
    'error': 'white'
};

const CE_TOAST_TYPE_BACKGROUND_COLORS: { [type in CeToastType]: string }
    = {
    'info': 'neutral',
    'success': 'success-700',
    'error': 'error'
};

@Pipe({
    name: 'toastTextColor'
})
export class CeToastTextColor implements PipeTransform {
    transform(type: CeToastType): string {
        return CE_TOAST_TYPE_TEXT_COLORS[type];
    }
}

@Pipe({
    name: 'toastBackgroundColor'
})
export class CeToastBackgroundColor implements PipeTransform {
    transform(type: CeToastType): string {
        return CE_TOAST_TYPE_BACKGROUND_COLORS[type];
    }
}