import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/Navbar';

import {
    ShowActivityCards,
    GetAllRoutines,
    Home
} from './components';

const App = () => {
    const [activities, setActivities] = useState([]);
    const [routines, setRoutines] = useState([]);

    return (
      <Router>
          <div className='App'>
          <MainNavbar />
              <Switch>
                  <Route path={'/'} exact>
                    <Home />
                  </Route>
                  <Route path={'/activities'}>
                    <ShowActivityCards activities={activities} setActivities={setActivities} />
                  </Route>
                  <Route path={'/routines'}>
                    <GetAllRoutines routines={routines} setRoutines={setRoutines} />
                  </Route>
              </Switch>
          </div>
    </Router>
    )
  };

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);