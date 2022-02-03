import { CellType } from "../../types";

export const SET_CELL_VALUE = "SET_CELL_VALUE";
export const SET_CELL_VALUE_FAILURE = "SET_CELL_VALUE_FAILURE";

export type SetCellValueActionType = {
    type: typeof SET_CELL_VALUE;
    payload: {
        row: number;
        col: number;
        value: string;
    };
};

export type SetCellValueFailureActionType = {
    type: typeof SET_CELL_VALUE_FAILURE;
};

export type SetCellActionType = SetCellValueActionType | SetCellValueFailureActionType;
