import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk" 
import { defaultCellValues } from "../components/SheetController";
import rootReducer from "./reducers/rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

const initialStateValues = {
    sheet: {
        cells: defaultCellValues,
    }
}

export const store = createStore(
    rootReducer, 
    initialStateValues,
    applyMiddleware(thunk)
);