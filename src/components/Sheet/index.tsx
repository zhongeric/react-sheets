import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { SheetType } from '../../types';

import styles from './Sheet.module.css';
import sharedStyles from '../shared/Shared.module.css';
import Cell from '../shared/Cell';
import { NUM_COLUMNS, NUM_ROWS } from '../SheetController';
import { RootState } from '../../redux/store';
import { callSetCellValue } from '../../redux/actions/sheet';
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

type Props = PropsFromRedux & {};
// 5x5 rows x columns

const Sheet = ({}: Props) => {
    return (
            <div className={styles.SheetContainer}>
                <div className={styles.SheetContent}>
                    <div className={styles.ColumnHeaders}>
                        <div></div>
                        {
                            Array.from(Array(NUM_COLUMNS).keys()).map(i => {
                                return <span key={i} className={styles.ColumnHeader}>
                                    {i}
                                </span>
                            })
                        }
                    </div>
                    {
                        Array.from(Array(NUM_ROWS).keys()).map((rowIndex) => {
                                    return (
                                        <div className={styles.Row}>
                                            <span>row-{rowIndex}</span>
                                            {
                                                Array.from(Array(NUM_COLUMNS).keys()).map((columnIndex) => {
                                                    return (
                                                        <Cell 
                                                            key={`${rowIndex}-${columnIndex}`} 
                                                            row={rowIndex}
                                                            col={columnIndex}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                        })
                    }
                </div>
            </div>  
        )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sheet);