import { Counter } from "core";

const _counter: Counter = new Counter();

enum ElementID {
    IncrementButton = "IncrementButton",
    DecrementButton = "DecrementButton"
}

function initialize() {
    document.getElementById(ElementID.IncrementButton)?.addEventListener("click", onIncrementClicked);
    document.getElementById(ElementID.DecrementButton)?.addEventListener("click", onDecrementClicked);

    // TODO : Subscribe to counter changes
}

function onIncrementClicked() {
    console.log("increment!");
    _counter.increment();
}

function onDecrementClicked() {
    console.log("decrement!");
    _counter.decrement();
}

console.log("Initializing...");
initialize();
console.log("Initialized!");