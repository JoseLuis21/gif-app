import { authTypes } from "../types/authTypes";
import { uiFinishLoading, uiStartLoading } from "./ui";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch( uiStartLoading() );

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch( login(user.uid, 'jose') );

                dispatch( uiFinishLoading() );

            }).catch( e => {
                console.error(e)

                dispatch( uiFinishLoading() );
            })

    }
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then( ({user}) => {
            dispatch(login(user.uid, user.displayName))
        })
    }
}


export const login = (uid, displayName) => ({
    type: authTypes.login,
    payload: {
        uid,
        displayName
    }   
});


export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch( logout() );
    }
}

export const logout = () => ({
    type: authTypes.logout
});


