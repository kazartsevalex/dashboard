import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Logout from './containers/Logout';
import Register from './containers/Register';
import EmployeePage from './containers/EmployeePage';
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
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch, user]);

  return (
    <>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/employee/:id" component={EmployeePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/logout" component={Logout} />
    </>
  );
}

export default App;
