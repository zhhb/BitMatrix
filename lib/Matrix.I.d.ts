declare class Matrix {
    width: number;
    height: number;
    total: number;
    constructor(width: number, height: number);
}
declare namespace Matrix {
    interface cmd {
        width: number;
        height: number;
        fill(v: any): any;
        fillRow(row: number, value: any): any;
        fillColumn(column: number, value: any): any;
        get(x: number, y: number): any;
        set(x: number, y: number, v: any): any;
        getRow(y: number): any[];
        setRow(y: number, row: any): any;
        getColumn(x: number): any[];
        setColumn(x: number, column: any[]): any;
        cellForEach(fn: (v: any, x: number, y: number) => void): any;
        showView(): string;
    }
    class Row {
        index: number;
        length: number;
        forEach(fn: (value: any, index: number, row: Row) => any): any;
        get(index: number): any;
        set(index: number, value: any): any;
    }
}
export = Matrix;
