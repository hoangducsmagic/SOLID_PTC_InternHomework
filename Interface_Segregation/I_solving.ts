export class Magic{
    protected attackPoint: number;
    protected manaCost: number;
    protected recoverTime: number;

    set(attribute: string,value:number): void{
        this[attribute] = value;
    }
}

export abstract class OlympusGod{

}

export class HeavenGod extends OlympusGod{
    lightingMagic: Magic;
}

export class SeaGod extends OlympusGod{
    waterMagic: Magic;
}

export class UnderworldGod extends OlympusGod{
    fireMagic: Magic;
}

const Zeus = new HeavenGod();
const Poseidon = new SeaGod();
const Hades = new UnderworldGod();