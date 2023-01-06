import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { doLogin } from '../../services/AuthService';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onChangeEmail(event) {
        console.log(onChangeEmail);
        setEmail(event.target.value);
    }

    function onChangePassword(event) {
        console.log(onChangePassword);
        setPassword(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();
        console.log(email, password);
        const isValid = doLogin(email, password);
        if (isValid)
            history.push('/settings');

    }

    return (

        <div>
            <main>
                <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
                    <div className="container">
                        <p className="text-center">
                            <Link to="/" className="d-flext align-items-center justify-content-center">
                                <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                                </svg>
                                Voltar Para Pagina Principal
                            </Link>
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="bg-white shadow border-0 rounded border-light p-sm-5 w-100 fmxw-500">
                                    <div className="text-center">
                                        <img src="/img/favicon/logoapenas.png" alt="GoldMart" width={70} />
                                    </div>
                                    <div className="text-center text-md-center mb-4 mt-md-0">
                                        <h1 className="mb-0 h5">Faça login em nossa plataforma</h1>
                                    </div>

                                    <form action="#" className="mt-2" onSubmit={onSubmit}>
                                        <div className="form-group mb-1">
                                            <label htmlFor="email">Seu email</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                                </span>
                                                <input type="email" class="form-control" placeholder="exemplo@gmail.com" id="email" autofocus required onChange={onChangeEmail}></input>
                                            </div>
                                            <label htmlFor="password">Sua senha</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                                </span>
                                                <input type="password" class="form-control" placeholder="Senha" id="password" autofocus required onChange={onChangePassword}></input>

                                            </div>
                                            <div className="d-flex justify-content-between mb-4">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="remember"></input>
                                                    <label className="form-check-label mb-0" for="remember">
                                                        Lembre-me
                                                    </label>
                                                </div>
                                                <div><a href="/forgot-password" class="small text-right">Perdeu sua Senha? </a></div>

                                            </div>
                                            <div className="d-grid">
                                                <button type="submit" class="btn btn-gray-800">Login</button>
                                            </div>
                                        </div>
                                    </form>


                                </div>
                            </div>
                        </p>
                    </div>
                </section>
            </main>
        </div>

    )


}

export default Login; 