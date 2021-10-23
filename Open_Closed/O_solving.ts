// Recruiting price:
//      $100*strength per Swordman
//      $200*strength+10 per Pikeman
//      $300*strength-20 per Archer

export abstract class Solider {
    constructor(protected strength: number) {}
    abstract get price(): number;
}

export class Swordman extends Solider {
    get price(): number {
        return 100 * this.strength;
    }
}

export class Pikeman extends Solider {
    get price(): number {
        return 200 * this.strength + 10;
    }
}

export class Archer extends Solider {
    get price(): number {
        return 300 * this.strength - 20;
    }
}

export class Barrack {
    constructor(private soliders: Solider[]) {}
    addSolider(solider: Solider) {
        this.soliders.push(solider);
    }

    get totalPrice(): number {
        var price = 0;

        for (let solider of this.soliders) {
            price += solider.price;
        }

        return price;
    }
}

const myBarrack = new Barrack([new Archer(20), new Swordman(30)]);
console.log(myBarrack.totalPrice);
