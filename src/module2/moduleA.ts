export class callMe {
    constructor (
        private animal: string,
        private myArray: number [],
    ) {};

    public callAnimal (): void {
        console.log(`This is a ${this.animal}. Hello, ${this.animal}!`);
    };

    public doArray (numbers: number []): void {
        let limit = 10;
        this.myArray;
        for (let i = 0; i < limit; i++) {
            this.myArray.push(numbers[i]);
            console.log(this.myArray);
        };
    };

}

export function add (x: number, y: number): number {
    return x + y;
};

export function subtraction (a: number, b: number): number {
    return a - b;
};

export default 1;