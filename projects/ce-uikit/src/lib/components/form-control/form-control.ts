import { Component, Input } from "@angular/core";
import { ControlValueAccessor, FormControl, ValidationErrors } from "@angular/forms";
import { ReplaySubject } from "rxjs";

@Component({
    template: ``,
    selector: 'ce-panel-form-control',
})
export class FormControlComponent<T> implements ControlValueAccessor {

    @Input() disabled = false;

    protected _value?: T;
    protected value$ = new ReplaySubject<T | undefined>(1);
    protected touched = false;

    get value() {
        return this._value;
    }

    set value(value: T | undefined) {
        this._value = this.preprocess(value);
        this.value$.next(this._value);
        this.onChange(this._value);
    }

    preprocess(value: T | undefined): T | undefined {
        return value;
    }

    onChange = (value: T | undefined) => { };

    onTouched = () => { };

    writeValue(value: T) {
        if (value !== undefined) {
            this.value = value;
        }
    }

    valueChanges() {
        return this.value$;
    }

    registerOnChange(onChange: any) {
        this.onChange = onChange;
    }

    registerOnTouched(onTouched: any) {
        this.onTouched = onTouched;
    }

    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

    validate(formControl: FormControl) {
        // TODO : add error controls
        return null;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
