import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.css';
import './styles/utility.css';
import './styles/utility_colors.css';
import './styles/override.css';
import { Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
function App() {
  return (
    <div className='text-center'>
      <Switch>
        <PublicRoute path='/signin'>
          <SignIn />
        </PublicRoute>
        <PrivateRoute path='/'>
          <Home />
        </PrivateRoute>
    </Switch>
    </div>
  );
}

export default App;
