import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class CeRadioButtonService<T> {

    private readonly selection$ = new ReplaySubject<T | undefined>(1);
    
    setValue(value: T | undefined) {
        this.selection$.next(value);
    }

    selectedOptionChanges(): Observable<T | undefined> {
        return this.selection$;
    }
}