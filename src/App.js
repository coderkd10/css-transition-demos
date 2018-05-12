import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import BasicTransitionDemo from './css-transistion-demo/BasicTransition';
import MouseBallDemo from './css-transistion-demo/MouseBall';

const App = () => (
  <HashRouter>
    <div>
      <h2>CSS Transition Demos</h2>
      <ul>
        <li>
          <Link to='/basic'>
            Basic transition demo
          </Link>
        </li>
        <li>
          <Link to='/ball'>
            Mouse tracking ball demo
          </Link>
        </li>
      </ul>
      (these demos have been adapted from <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions'>MDN's page on CSS transitions</a>)
      <hr/>
      <Switch>
        <Route
          path='/basic' 
          render={() =>
            <div>
              <h3>Basic demo</h3>
              <BasicTransitionDemo />
            </div>
          }
        />
        <Route
          path='/ball'
          render={() =>
            <div>
              <h3>Ball demo</h3>
              <MouseBallDemo />
            </div>
          }
        />  
      </Switch>
    </div>
  </HashRouter>
);

export default App;
