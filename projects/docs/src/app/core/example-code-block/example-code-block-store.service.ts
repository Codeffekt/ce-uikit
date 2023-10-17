import { Injectable } from "@angular/core";

export interface DemoCodeBlockFactoryComponents {
    [type: string]: any;
}

export interface DemoCodeBlockFactoryOptions {
    components: DemoCodeBlockFactoryComponents;
}

@Injectable({ providedIn: 'root' })
export class DemoCodeBlockStoreService {

    private store: DemoCodeBlockFactoryOptions = {
        components: {}
    };

    getComponentType<T>(type: string): any {
        return this.store.components[type];
    }

    setComponents(components: DemoCodeBlockFactoryComponents) {
        Object.keys(components).forEach(type => this.store.components[type] = components[type]);
    }
}