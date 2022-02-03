import { SheetType } from "../../types";
import { SET_CELL_VALUE, SetCellActionType } from "../types/sheet";

const initialState: SheetType = {
    cells: [],
};

export const sheet = (state = initialState, action: SetCellActionType): SheetType => {
    switch(action.type) {
        case SET_CELL_VALUE:
            const { row, col, value } = action.payload;
            if(!value) {
                return state;
            }
            return {
                ...state,
                cells: state.cells.map((r, i) => {
                    if (i === row) {
                        return state.cells[row].map((cell, j) => {
                            if (j === col) {
                                return {
                                    ...cell,
                                    value
                                }
                            }
                            return cell;
                        });
                    }
                    else {
                        return r;
                    }
                })
            };
        default:
            return state;
    }
}