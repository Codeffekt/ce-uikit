import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

/**
 * Internal gradient picker state among 'idle' and 'picking' states
 * idle : no mouse down event or mouse down event | mouse move event followed by mouse up event
 * picking : mouse down event or mouse down event followed by mouse move event
 */
export type CeColorPickerState = 'picking' | 'idle';

@Injectable()
export class CeColorPickerStateService {

    private state$ = new ReplaySubject<CeColorPickerState>(1);

    constructor() { }

    setState(state: CeColorPickerState) {
        this.state$.next(state);
    }

    stateChanges(): Observable<CeColorPickerState> {
        return this.state$;
    }

}