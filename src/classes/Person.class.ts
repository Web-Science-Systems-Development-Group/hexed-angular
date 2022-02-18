class Person {
    name: string|undefined;
    currentScore: number;

    constructor();
    constructor(name: string|undefined, score: number);
    constructor(name?: string, score?: number) {
        this.name = name;
        this.currentScore = score ?? 0;
    }

    copy(): Person {
        return new Person(this.name, this.currentScore);
    }
}

export default { Person }