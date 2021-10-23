interface haveStrength {
    strength: number;
}

export class Swordman {
    constructor(public strength: number) {}
}

export class Pikeman {
    constructor(public strength: number) {}
}

export class Archer {
    constructor(public strength: number) {}
}

export class Barrack {
    constructor(private soliders: haveStrength[]) {}
    addSolider(solider: haveStrength) {
        this.soliders.push(solider);
    }

    // Recruiting price:
    //      $100*strength per Swordman
    //      $200*strength+10 per Pikeman
    //      $300*strength-20 per Archer
    get totalPrice(): number {
        var price = 0;

        for (let solider of this.soliders) {
            switch (solider.constructor.name) {
                case "Swordman":
                    price += 100 * solider.strength;
                    break;
                case "Pikeman":
                    price += 200 * solider.strength + 10;
                    break;
                case "Archer":
                    price += 300 * solider.strength - 20;
                    break;
            }
        }

        return price;
    }
}

const myBarrack = new Barrack([new Archer(20), new Swordman(30)]);
console.log(myBarrack.totalPrice);
