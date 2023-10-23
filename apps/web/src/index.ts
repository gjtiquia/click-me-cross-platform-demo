// import { Counter } 

enum ElementID {
    IncrementButton = "IncrementButton",
    DecrementButton = "DecrementButton"
}

function initialize() {
    // TODO : Initialize Counter

    document.getElementById(ElementID.IncrementButton)?.addEventListener("click", onIncrementClicked);
    document.getElementById(ElementID.DecrementButton)?.addEventListener("click", onDecrementClicked);

    // TODO : Subscribe to counter changes
}

function onIncrementClicked() {
    console.log("increment!");
    // TODO : Link to Counter
}

function onDecrementClicked() {
    console.log("decrement!");
    // TODO : Link to Counter
}

console.log("Initializing...");
initialize();
console.log("Initialized!");