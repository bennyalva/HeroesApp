import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    const {dispatch} = useContext(AuthContext);
    const handlerLogin = () => {
     const lastPath = localStorage.getItem('lastPath') || '/';
     dispatch({
         type: types.login,
         payload: {
             name: 'lbenny'
         }
     });
     history.replace(lastPath);
    }
    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr></hr>
            <button
                    className="btn btn-primary"
                    onClick={ handlerLogin }
                   >
                       Login
                   </button>
        </div>
    )
}
