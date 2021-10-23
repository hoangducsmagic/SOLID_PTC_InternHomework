import fs from "fs";

interface Reader{
    read(dataSource: string): void;
    data: string;
}

interface Printer{
    print(data:string): void;
}

class FileReader implements Reader {
    constructor() {}
    data: string = "";
    read(dataSource: string): void {
        this.data = fs.readFileSync(dataSource, "utf-8");
    }
}

class ConsolePrinter implements Printer {
    print(data: string): void {
        console.log(data);
    }
}

class Summary {
    constructor(public reader: Reader, public printer: Printer) { };
    readAndPrint(dataSource:string): void {
        this.reader.read(dataSource);
        this.printer.print(this.reader.data);
    }
}

const mySummary = new Summary(new FileReader(),new ConsolePrinter());
mySummary.readAndPrint("./Dependency_Inversion/D_notes.txt");

