export default class TheLastOfUs {
    private numberInitial: number;
    private percentOfHealth: number;

    constructor(numberInitial: number, percentOfHealth: number) {
        this.numberInitial = Math.abs(numberInitial);
        this.percentOfHealth = Math.abs(percentOfHealth);
    }

    public getPercentOfHealth(): number {
        return this.percentOfHealth;
    }

    public getNumberInitial(): number {
        return this.numberInitial;
    }

    public setPercentOfHealth(percentOfHealth: number): void {
        this.percentOfHealth = Math.abs(percentOfHealth);
    }

    public setNumberInitial(numberInitial: number): void {
        this.numberInitial = Math.abs(numberInitial);
    }

    public getNumberOfMissions(target: number): number {
        return this.getNumberOfMissionsAux(this.numberInitial, target);
    }

    public getNumberOfMissionsAux(initialImune: number, target: number): number {
        if (initialImune >= target) {
            return 0;
        }

        const next = initialImune * (1 + this.percentOfHealth);
        return 1 + this.getNumberOfMissionsAux(next, target);
    }
}