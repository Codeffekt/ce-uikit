import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CeIconRegistryService {

    private fontSet?: string;

    constructor() { }

    setDefaultFontSetClass(fontSet: string) {
        this.fontSet = fontSet;
    }

    getFontSet(): string | undefined {
        return this.fontSet;
    }
}