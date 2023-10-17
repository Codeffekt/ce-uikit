import { ElementRef, Injectable, OnInit, Renderer2 } from "@angular/core";

/**
 * Helper renderer that encapsulates DOM manipulation (classes and styles)
 * It uses Angular ElementRef and Renderer2
 */
@Injectable()
export class CeRenderer implements OnInit {

    // In-memory classes that have been set through setClassValue
    private classRecords: { [key: string]: string } = {}

    hostClasses: string[] = [];

    constructor(protected elementRef: ElementRef, protected renderer: Renderer2) { }

    ngOnInit(): void {
        this.onInit();
        this.addClasses(this.hostClasses);
    }

    /**
     * Override this function to perform any custom initialization logic
     */
    protected onInit() { }

    /**
     * Convenient function to append a new class to a DOM element 
     * 
     * @param className the class name to be added
     * @returns 
     */
    addClass(className?: string) {
        if (!className) {
            return;
        }
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }

    /**
     * Convenient function to append an array of classes to a DOM element
     * @param classeNames  the classes to be added
     */
    addClasses(classeNames: string[]) {
        for (const className of classeNames) {
            this.addClass(className);
        }
    }

    /**
     * Convenient function to remove a specific class from a DOM element
     * @param className the class to be removed
     */
    removeClass(className: string) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }

    /**
     * Use this function when you want to set a class value and remove the previous one that 
     * has the same category.
     * 
     * example :
     * a container has a border color with class 'border-color-primary' 
     * you want to apply the new border color with class 'border-color-secondary'
     * 
     * in order to remove previous border color (border-color-primary) you must use 
     * setClassValue('border-color', 'border-color-secondary')
     * 
     * @param category the category string class (ex: 'border-color', 'border')
     * @param className the new value to be applied (ex: 'text-secondary', 'text-primary')
     */
    setClassValue(category: string, className: string) {

        this.removeClassValue(category);
        this.classRecords[category] = className;
        this.addClass(className);
    }

    /**
     * Use this function when you want to remove a class name that has been set through setClassValue 
     * function. 
     * @param category the category string class (ex: 'border-color', 'border')
     */
    removeClassValue(category: string) {
        const previousClassName = this.classRecords[category];
        if (previousClassName) {
            this.renderer.removeClass(this.elementRef.nativeElement, previousClassName);
        }
    }

    /**
     * Apply a new style value to the given DOM element
     * @param style the css style property
     * @param value the value ot be applied
     */
    setStyle(style: string, value: string) {
        this.renderer.setStyle(this.elementRef.nativeElement, style, value);
    }

    /**
     * If value is empty then provide default value.
     * It allows default value for directive
     * @param inputValue value given to the directive input
     * @param defaultValue if empty then default value is returned else given value
     * @returns 
     */
    sanitizeValue<T>(inputValue: T | '', defaultValue: T): T {
        return inputValue === '' ? defaultValue : inputValue;
    }

    /**
     * Returns whether element is active or not.
     * @returns  true if element is active, false otherwise
     */
    isActive(): boolean {
        return this.elementRef.nativeElement === document.activeElement;
    }
}