import fs, { read } from "fs";

export class FileReader {
    constructor(public fileName: string) {}

    read(): string {
        const data = fs.readFileSync(this.fileName, "utf-8");
        return data;
    }

    print(): void {
        console.log(this.read());
    }
}

const reader = new FileReader("./Single_Responsibility/S_notes.txt");
reader.print();
