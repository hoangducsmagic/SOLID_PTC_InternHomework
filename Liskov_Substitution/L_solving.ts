export abstract class Unit {
    constructor(protected health: number) {}
}

export abstract class Solider extends Unit{
    abstract attack(): void;
}

export abstract class Wizard extends Unit{
    abstract support(unit:Unit): void;
}

export class Swordman extends Solider {
    attack(): void {
        // attack in a swordman way
    }
}

export class HealthGod extends Wizard {
    support(unit: Unit): void {
        // support another unit with gaining his/her health
    }
}
