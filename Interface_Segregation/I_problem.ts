export class Magic{
    protected attackPoint: number;
    protected manaCost: number;
    protected recoverTime: number;

    set(attribute: string,value:number): void{
        this[attribute] = value;
    }
}

export class OlympusGod{
    lightingMagic: Magic;
    waterMagic: Magic;
    fireMagic:Magic;
}

const Zeus = new OlympusGod();
const Poseidon = new OlympusGod();
const Hades = new OlympusGod();