import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { LoginPage } from '../components/auth/LoginPage'
import { RegisterPage } from '../components/auth/RegisterPage'

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/auth/login" exact>
                    <LoginPage />
                </Route>
                <Route path="/auth/register" exact>
                    <RegisterPage />
                </Route>

                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}
