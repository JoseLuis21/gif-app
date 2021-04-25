import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'

export const LoginPage = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector( state => state.ui );

    const [formValues, handleInputChange] = useForm({
        email: 'josephluihs@gmail.com',
        password: '123456'
    })

    const {email, password} = formValues;

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(startLoginEmailPassword(email, password))
    }

    const handleGoogleLogin = (event) => {
        event.preventDefault();
        dispatch( startGoogleLogin() );
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h2 className="card-title text-center">Iniciar sesion</h2>
                            <form className="form-signin" onSubmit={ handleLogin } >

                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" name="email" value={email} onChange={ handleInputChange} placeholder="Email address" required />
                                    <label >Email address</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" name="password" value={password} onChange={ handleInputChange} placeholder="Password" required />
                                    <label >Password</label>
                                </div>

                                <button className="btn btn-lg btn-primary btn-block text-uppercase" disabled={loading} >Iniciar sesion</button>
                                
                                <hr className="my-4" />

                                <button className="btn btn-lg btn-primary btn-block text-uppercase"  onClick={ handleGoogleLogin } ><i className="fab fa-google mr-2"></i> Sign in with Google</button>                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
