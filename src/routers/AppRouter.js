import React, { useEffect, useState } from 'react';
import { firebase } from "../firebase/firebase-config";
import { login } from "../actions/auth";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { GifPage } from "../components/gif/GifPage";
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged( (user) => {
            if(user?.uid){
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }

            setChecking(false);
        })
    }, [dispatch, setChecking])

    if( checking ){
        return (
            <h1>Espera un Momento....</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" 
                        isAuthenticated={ isLoggedIn }
                        component={ AuthRouter }                        
                    >
                    </PublicRoute>
                    <PrivateRoute 
                        path="/" 
                        exact
                        isAuthenticated={ isLoggedIn }
                        component={ GifPage }
                        >
                    </PrivateRoute>

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
