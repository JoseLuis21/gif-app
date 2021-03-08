import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { GifPage } from '../components/gif/GifPage';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth">
                        <AuthRouter />
                    </Route>
                    <Route path="/" exact>
                        <GifPage />
                    </Route>

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
