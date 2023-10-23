export class Counter {
    // PRIVATE MEMBERS
    private _value: Number;

    // PUBLIC GETTERS
    public get value(): Number { return this._value };

    constructor() {
        this._value = 0;
    }
}