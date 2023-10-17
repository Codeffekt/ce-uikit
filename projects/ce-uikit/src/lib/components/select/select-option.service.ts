import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

export interface CeSelectOption<T> {
    value: T;
    label: string
}

@Injectable()
export class CeSelectionOptionService<T> {

    private value$ = new ReplaySubject<T | undefined>(1);
    private option$ = new ReplaySubject<CeSelectOption<T> | undefined>(1)
    private options: CeSelectOption<T>[] = [];

    constructor() { }

    setValue(value: T | undefined) {
        this.value$.next(value);
    }

    onValueChanges() {
        return this.value$;
    }

    selectOption(option: CeSelectOption<T> | undefined) {
        this.option$.next(option);
    }

    selectedOptionChanges(): Observable<CeSelectOption<T> | undefined> {
        return this.option$;
    }

    register(option: CeSelectOption<T>) {
        this.options.push(option);
    }

    getOptionFromValue(value: T | undefined): CeSelectOption<T> | undefined {
        return this.options.find(option => option.value === value);
    }
}