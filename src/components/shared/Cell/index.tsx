import React, {useState} from 'react';
import styles from './Cell.module.css';
import sharedStyles from '../shared/Shared.module.css';
import { RootState } from '../../../redux/store';
import { callSetCellValue } from '../../../redux/actions/sheet';
import { connect, ConnectedProps } from 'react-redux';

function mapStateToProps(state: RootState) {
    return {
        sheet: state.sheet
    }
}
  
// mapDispatchToProps is an object containing your actions / thunks, here we just add all of our actions in ./actions/foo
const mapDispatchToProps = {
    callSetCellValue
}

// https://react-redux.js.org/tutorials/connect#connecting-the-components
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
    row: number;
    col: number;
}

const Cell = ({ row, col, sheet, callSetCellValue }: Props) => {
    const [value, setValue] = useState(sheet.cells[row][col].value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        callSetCellValue(row, col, e.target.value);
        setValue(e.target.value);
    };

    return (
        <input 
            className={styles.Cell}
            value={value}
            onChange={handleChange}
        />
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell);