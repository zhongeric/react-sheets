/*
    App.tsx, the main file of your project
    This starter code includes react-router, a popular library used to
    handle navigation and redirection within a React app.
    To remove it, just run npm uninstall react-router, and remove the <Router>, <Switch>, and <Route> components
    For more information, check out the react-router docs here: https://reactrouter.com/web/guides/quick-start
*/

import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import FourZeroFour from './components/shared/404';
import { SheetController } from './components/SheetController';

function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                { /* React router docs https://reactrouter.com/docs/en/v6 */}
                <Route exact path="/" component={ SheetController } />
                <Route path="*" component={ FourZeroFour } />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
