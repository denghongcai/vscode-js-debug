function objectPrinter(obj: object): string {
    return obj.toString();
}

(global as any).objectPrinter = objectPrinter;

class MyCustomClass {
    public constructor(private readonly name: string) {}

    public toString(): string {
        return `customClass named: ${this.name}`;
    }

    public get aa(): string {
        return "aaaaaaaaa";
    }

    public get bbb(): number {
        return 1234;
    }
}

const customClassInstance: MyCustomClass = new MyCustomClass("zero");
const customClassInstance2: MyCustomClass = new MyCustomClass("one");
const customClassInstance3: MyCustomClass = new MyCustomClass("two");

console.log("Line 1");
console.log("Line 2");
console.log("Line 3");
console.log("Line 4");
console.log("Line 5");
console.log("Line 6");
console.log("Line 7");
console.log("Line 8");
