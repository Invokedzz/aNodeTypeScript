export class aSmallTest {
    private addNumbers (x: number, y: number): number {
        return x + y;
    };

    private subtractNumbers (x: number, y: number): number {
        return x - y;
    };

    public showResult (x: number, y: number): void {
        console.log(this.addNumbers(x, y));
    };

    public showAnotherResult (x: number, y: number): void {
        console.log(this.subtractNumbers(x, y));
    }
}

const startClass = new aSmallTest();
startClass.showResult(5, 2);
startClass.showAnotherResult(10, 30);

export default 1;