import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import Auth from './pages/auth/auth.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop-componenet';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/auth' component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
