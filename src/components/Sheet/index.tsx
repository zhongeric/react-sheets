import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { FooType } from '../../types/ExampleType';

import styles from './Sheet.module.css';
import sharedStyles from '../shared/Shared.module.css';
import Cell from '../shared/Cell';

// Combining the props from the router and the component props
type Props = RouteComponentProps & {}

// State type for this component
type State = {
    
}

const NUM_COLUMNS = 5;
const NUM_ROWS = 5;

// 5x5 rows x columns

class Sheet extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    render() {
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
                                <>
                                    <span>row-{rowIndex}</span>
                                    {Array.from(Array(NUM_COLUMNS).keys()).map((columnIndex) => {
                                            return (
                                                <Cell key={`${rowIndex}-${columnIndex}`} />
                                            )
                                    })}
                                </>
                            )
                        })
                    }
                </div>
            </div>
            
        )
    }
}

// Wrapping the component in the withRouter gives us access to the history object
export default withRouter(Sheet);