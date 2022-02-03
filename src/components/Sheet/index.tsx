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

class Sheet extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            // You can assign a class to an element like this
            <div className={styles.ExampleClass}>
                {/* And assign multiple like this */}
                <div className={`${styles.ExampleClass} ${sharedStyles.SharedClass}`}>
                    Make cool shit :)
                </div>
            </div>
        )
    }
}

// Wrapping the component in the withRouter gives us access to the history object
export default withRouter(Sheet);