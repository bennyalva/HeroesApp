import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
    return (
        <Router>
            <div>
              <Switch>
              <PublicRoutes isAuthenticated={ user.logged} exact path="/login" component={LoginScreen} />
              <PrivateRoutes isAuthenticated={ user.logged} path="/" component={DashboardRoutes} />
              </Switch>
            </div>
        </Router>
      
    )
}
