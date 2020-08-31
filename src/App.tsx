import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import FlexMenus from './routes/FlexMenus';
import HolyGrail from './routes/HolyGrail';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.AppContent}>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/flex-menus">
              <FlexMenus />
            </Route>
            <Route path="/holy-grail">
              <HolyGrail />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
