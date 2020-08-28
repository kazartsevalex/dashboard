import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Register from './containers/Register';
import { fetchUser } from './store/actions/index';

function App() {
  const dispatch = useDispatch();
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(prev => !prev);
  }

  const user = useSelector(state => state.auth.user);
  const isAuthenticated = user !== null;
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch, user]);

  return (
    <>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        isAuth={isAuthenticated}
      />
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
        isAuth={isAuthenticated}
      />
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </>
  );
}

export default App;
