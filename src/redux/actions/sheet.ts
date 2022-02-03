import { RootStateOrAny } from "react-redux";
import { ThunkAction } from "redux-thunk";

import {
    SET_CELL_VALUE,
    SET_CELL_VALUE_FAILURE,
    SetCellValueActionType,
    SetCellValueFailureActionType,
    SetCellActionType,
} from '../types/sheet';

export const setCellValue = (row: number, col: number, value: string): SetCellValueActionType => ({
    type: SET_CELL_VALUE,
    payload: {
        row,
        col,
        value,
    },
});

export const setCellValueFailure = (): SetCellValueFailureActionType => ({
    type: SET_CELL_VALUE_FAILURE,
});

export const callSetCellValue = (row: number, col: number, value: string): ThunkAction<
    void,
    RootStateOrAny,
    unknown,
    SetCellActionType
> => async dispatch => {
    try {
        // For asynchronous operations, just use await here!
        dispatch(setCellValue(row, col, value))
    } catch (e) {
        dispatch(setCellValueFailure());
    }
};

