import React from 'react'

export const LoginScreen = ({history}) => {
    const handlerLogin = () => {
      history.replace('/')
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
