import EventEmitter from "events";
const eventEmitter = new EventEmitter();

export class letsdoEvents {
    private showNumbers (): void {
        eventEmitter.on('countNumbers', (numbers: number): void => {
            console.log(`You chose this value: ${numbers}`);
        });

        eventEmitter.emit('countNumbers', 20);

    };

    private showStrings (): void {
        eventEmitter.on('countStrings', (userString: string): void => {
            if (!userString || userString.length <= 0) return;
            console.log(`You chose this string: ${userString}`);
        });

        eventEmitter.emit('countStrings', 'Pablo Honey');

    };

    public showResult (): void {
        return this.showNumbers();
    };

    public exhibitStrings (): void {
        return this.showStrings();
    };

}

const startClass = new letsdoEvents();
startClass.showResult();
startClass.exhibitStrings();

export default 1;