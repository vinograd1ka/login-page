import React, {useMemo, useRef, useState} from 'react';
import cl from './Login.module.css';

function createUser (email, password, repeatPassword) {
    return { email, password, repeatPassword };
}

const Login = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passValue, setPassValue] = useState('')
    const [repPassValue, setRepPassValue] = useState('')
    const repPassRef = useRef(null)

    const user = useMemo(() => createUser(emailValue.trim(), passValue.trim(), repPassValue.trim()), [emailValue, passValue, repPassValue])

    const handleChangePass = (event) => {
        setPassValue(event.target.value)
        event.target.value !== repPassValue ? repPassRef.current.setCustomValidity('Неверный пароль') : repPassRef.current.setCustomValidity('')
    }

    const handleChangeRepPass = (event) => {
        setRepPassValue(event.target.value)
        event.target.value !== passValue ? repPassRef.current.setCustomValidity('Неверный пароль') : repPassRef.current.setCustomValidity('')
    }

    return (
        <>
            <form>
                <div className={cl.container}>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>

                    <hr/>

                    <label htmlFor="email"><b>Email</b></label>
                    <input className={cl.input} type="text" placeholder="Enter Email" name="email"
                           value={emailValue.toLowerCase()}
                           onChange={(event) => setEmailValue(event.target.value)} required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input className={cl.input}
                           type="text" placeholder="Enter password" name="psw"
                           pattern="[A-Za-z\d\.]{6, 12}" title="Пароль должен быть длиной от 6 до 12 символов и содержать только буквы, цифры и точки."
                           value={passValue.trim()}
                           onChange={handleChangePass} required
                    />

                    <label htmlFor="psw-repeat"><b>Repeat password</b></label>
                    <input className={cl.input}
                           type="password" placeholder="Repeat password" name="psw-repeat"
                           ref={repPassRef}
                           value={repPassValue.trim()}
                           onChange={handleChangeRepPass} required
                    />

                    <hr/>

                    <button type='submit' className={cl.register_btn}>Register</button>
                </div>

                <div className={cl.container && cl.sign_in}>
                    <p>Already have an account? <a href="#">Sign in</a>.</p>
                </div>

                <pre>{JSON.stringify(user, null, 3)}</pre>
            </form>
        </>
    );
};

export default Login;