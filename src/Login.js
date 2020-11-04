import React from 'react';

import UserContext from './contexts/user';

const Login = ({ location }) => {
    return <UserContext.Consumer>
        {({ signedIn, updateUser}) => {
            return <div>
                { signedIn ? (
                    <p>Ya puedes ir al panel de administración!!</p>
                ) : (
                    <>
                        <button onClick={() => updateUser(true)}>Login</button>
                        { (location.state && location.state.message) &&
                            <p>
                                {location.state.message}
                            </p>
                            }
                    </>
                )}
            </div>
        }}
    </UserContext.Consumer>;
}

export default Login;