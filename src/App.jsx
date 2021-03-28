import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import {
  Trainee,
  Login,
  InputFieldDemo,
  TestComponent,
  TextFieldDemo,
  Error,
} from './pages';

import { Navbar } from './layouts/index';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App" style={{ marginTop: 100 }}>
        <Switch>
          <Route exact path="/" component={Trainee} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/inputDemo" component={InputFieldDemo} />
          <Route exact path="/testComponent" component={TestComponent} />
          <Route exact path="/textFieldDemo" component={TextFieldDemo} />
          <Route path="/" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
