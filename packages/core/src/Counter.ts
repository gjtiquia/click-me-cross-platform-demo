export class Counter {
    private _value: number;

    public get value(): number { return this._value };

    constructor() {
        this._value = 0;
    }

    public increment(): void {
        this._value++;
    }

    public decrement(): void {
        this._value--;
    }
}