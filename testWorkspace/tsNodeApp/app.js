"use strict";
class MyCustomClass {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return `customClass named: ${this.name}`;
    }
    get aa() {
        return 'aaaaaaaaa';
    }
    get bbb() {
        return 1234;
    }
}
const customClassInstance = new MyCustomClass("zero");
const customClassInstance2 = new MyCustomClass("one");
const customClassInstance3 = new MyCustomClass("two");
console.log("Line 1");
console.log("Line 2");
console.log("Line 3");
console.log("Line 4");
console.log("Line 5");
console.log("Line 6");
console.log("Line 7");
console.log("Line 8");
//# sourceMappingURL=app.js.map