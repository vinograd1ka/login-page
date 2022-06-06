import React, {useMemo, useState} from 'react';
import cl from './Login.module.css';

function createUser (email, password, repeatPassword) {
    const user = { email, password, repeatPassword }
    console.log(user)
    return user;
}

const Login = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passValue, setPassValue] = useState('')
    const [repPassValue, setRepPassValue] = useState('')

    const user = useMemo(() => createUser(emailValue, passValue, repPassValue), [emailValue, passValue, repPassValue])

    return (
        <form>
            <div className={cl.container}>
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>

                <hr/>

                <label htmlFor="email"><b>Email</b></label>
                <input className={cl.input} type="text" placeholder="Enter Email" name="email"
                       value={emailValue}
                       onChange={(event) => setEmailValue(event.target.value)} required />

                <label htmlFor="psw"><b>Password</b></label>
                <input className={cl.input} type="text" placeholder="Enter Password" name="psw"
                       value={passValue}
                       onChange={event => setPassValue(event.target.value)} required />

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input className={cl.input} type="text" placeholder="Repeat Password" name="psw-repeat"
                       value={repPassValue}
                       onChange={event => setRepPassValue(event.target.value)} required />

                <hr/>

                <button type="submit" className={cl.register_btn}>Register</button>
            </div>

            <div className={cl.container && cl.sign_in}>
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
            <pre>{JSON.stringify(user, null, 3)}</pre>
        </form>
    );
};

export default Login;