abstract class Unit {
    constructor(protected health: number) {}
    abstract attack(): void;
}

export class Swordman extends Unit {
    attack(): void {
        // attack in a swordman way
    }
}

export class HealthGod extends Unit {
    support(unit: Unit): void {
        // support another unit with gaining his/her health
    }

    // However, a HealthGod cannot attack. Althought she is also a unit
    //, she can just support another, not attacking anyone else.
    //But if we disable this function, it will make an error :((
    attack(): void {}
}
