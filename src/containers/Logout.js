import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../store/actions/index';

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutUser());
  });

  return <Redirect to="/login" />;
}

export default Logout;
