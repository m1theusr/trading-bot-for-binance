import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { doLogin } from '../../services/AuthService';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function onChangeInput(event) {
        if (event.target.id === 'email')
            setEmail(event.target.value);
        else
            setPassword(event.target.value);
    }



    function onSubmit(event) {
        event.preventDefault();

        doLogin(email, password)
            .then(response => {
                if (response) {
                    localStorage.setItem('token', response.token);
                    history.push('/settings');
                }
            })
            .catch(err => {
                console.error(err);
                setError(`Invalid user and/or password!`);

            })


    }

    return (


            <main>
                <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
                    <div className="container">
                        <p className="text-center">
                            <Link to="/" className="d-flext align-items-center justify-content-center">
                                <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                                </svg>
                                Back to homepage
                            </Link>

                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="bg-white shadow border-0 rounded border-light p-4 w-100 fmxw-400">
                                    <div className="text-center">
                                        <img src="/img/favicon/logoapenas.png" alt="GoldMart" width={70} />
                                    </div>
                                    <div className="text-center text-md-center mb-3 mt-md-0">
                                        <h1 className="mb-0 h5">Sign in to our platform</h1>
                                    </div>
                                    {
                                        error ?
                                            <div className="alert alert-danger mt-0 fade show">{error}</div>
                                            : <React.Fragment></React.Fragment>
                                    }
                                    <form action="#" className="mt-1" onSubmit={onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="email">Your email</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                                </span>
                                                <input type="email" class="form-control" placeholder="exemplo@gmail.com" id="email" autofocus required onChange={onChangeInput}></input>
                                            </div>
                                            <label htmlFor="password">Your Password</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                                </span>
                                                <input type="password" class="form-control" placeholder="Password" id="password" autofocus required onChange={onChangeInput}></input>

                                            </div>
                                            <div className="d-flex justify-content-between mb-2 mt-2">
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="checkbox" value="" id="remember"></input>
                                                    <label className="form-check-label mb-0" for="remember">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <div><a href="/forgot-password" class="small text-right">Lost password? </a></div>

                                            </div>
                                            <div className="d-grid">
                                                <button type="submit" class="btn btn-gray-800">Login</button>
                                            </div>

                                        </div>

                                    </form>
                                    <div class="mt-3 mb-4 text-center">
                                        <span class="fw-normal">or login with</span>
                                    </div>
                                    <div className="d-flex justify-content-center my-2">
                                        <a href="#" className="btn btn-icon-only btn-pill btn-outline-gray-500 me-2" aria-label="facebook button" title="facebook button">
                                            <svg className="icon icon-xxs" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                        </a>
                                        <a href="#" className="btn btn-icon-only btn-pill btn-outline-gray-500 me-2" aria-label="twitter button" title="twitter button">
                                            <svg className="icon icon-xxs" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                        </a>
                                        <a href="#" className="btn btn-icon-only btn-pill btn-outline-gray-500" aria-label="github button" title="github button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                            </svg>                                </a>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                        <span className="fw-normal">
                                            Not registered?
                                            <a href="./sign-up.html" class="fw-bold">Create account</a>
                                        </span>
                                    </div>


                                </div>
                            </div>
                        </p>
                    </div>
                </section>
            </main>

    )


}

export default Login; 