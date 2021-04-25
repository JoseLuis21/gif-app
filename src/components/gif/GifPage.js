import React from 'react'
import { useDispatch } from "react-redux";
import { startLogout } from '../../actions/auth';

export const GifPage = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <div>
            Gif Page

            <button onClick={ handleLogout }>Logout</button>
        </div>
    )
}
