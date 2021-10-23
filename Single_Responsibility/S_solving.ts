import fs, { read } from "fs";

interface Printer {
    print(data: string): void;
}

class FileReader {
    constructor(public fileName: string) {}
    data: string = "";
    read(): void {
        this.data = fs.readFileSync(this.fileName, "utf-8");
    }
}

class ConsolePrinter {
    print(data: string): void {
        console.log(data);
    }
}

class Summary {
    static readAndPrint(data: string, printer: Printer): void {
        printer.print(data);
    }
}

const myReader = new FileReader("./Single_Responsibility/S_notes.txt");
myReader.read();
Summary.readAndPrint(myReader.data, new ConsolePrinter());
