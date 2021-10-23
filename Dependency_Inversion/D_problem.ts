import fs, { read } from "fs";


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
    readAndPrint(dataSource:string): void {
        const fileReader = new FileReader(dataSource);
        fileReader.read();
        const data = fileReader.data;
        const printer = new ConsolePrinter();
        printer.print(data);
    }
}

const mySummary = new Summary();
mySummary.readAndPrint("./Dependency_Inversion/D_notes.txt");

