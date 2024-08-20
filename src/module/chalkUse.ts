import chalk from "chalk";

export class studentsGrades {
    constructor (
        private name: string,
        private firstGrade: number,
        private secondGrade: number,
    ) {};

    private calculateGrades (): number {
        return (this.firstGrade + this.secondGrade) / 2;
    };

    private analyseGrades (): void {
        if (this.calculateGrades() >= 7) console.log(`${this.name}`, chalk.green('is approved'));
        console.log(`${this.name}`, chalk.red('is disapproved'));         
    };

    public displayText (): void {
        return this.analyseGrades();
    };

}

const schoolsucks = new studentsGrades('Peter Parker', 0, 10);
schoolsucks.displayText();

export default 1;