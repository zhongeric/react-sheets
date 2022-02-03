// Learn more about types in TypeScript: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

export type CellType = {
    value: string;
}

export type SelectedCellType = {
    row: number;
    col: number;
}

export type SheetType = {
    cells: CellType[][];
}