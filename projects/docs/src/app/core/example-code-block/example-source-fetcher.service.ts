import { Injectable } from '@angular/core';

const BASE_EXAMPLES_ASSET_PATH = './assets/examples';

@Injectable({ providedIn: 'root' })
export class ExampleSourceFetcherService {

    constructor() { }

    async fetchSource(sourceRef: string) {

        const sourceRefSegments = sourceRef.split('/');
        if (!sourceRefSegments.length) {
            throw new Error('Invalid code block sourceRef : cannot be empty')
        }

        const componentRef = sourceRefSegments[sourceRefSegments.length - 1];
        const sourcePath = `${BASE_EXAMPLES_ASSET_PATH}/${sourceRef}/${componentRef}.component.html`;

        return fetch(sourcePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Cannot find source file from ${sourcePath}`);
                }
                return response.text();
            });
    }
}