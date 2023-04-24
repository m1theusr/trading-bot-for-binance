import React, { useEffect, useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
import { getSettings, updateSettings } from "../../services/SettingsService";
import Menu from "../../components/Menu/Menu";
import Symbols from "./Symbols";

function Settings() {

    const inputEmail = useRef('');
    const inputNewPassword = useRef('');
    const inputConfirmPassword = useRef('');
    const inputApiUrl = useRef('');
    const inputStreamUrl = useRef('');
    const inputAcessKey = useRef('');
    const inputSecretKey = useRef('');


    const history = useHistory();

    const [error, setError] = useState('');

    const [success, setSuccess] = useState('');


    useEffect(() => {

        const token = localStorage.getItem("token");

        getSettings(token)
            .then(settings => {
                inputEmail.current.value = settings.email;
                inputApiUrl.current.value = settings.apiUrl;
                inputStreamUrl.current.value = settings.streamUrl;
                inputAcessKey.current.value = settings.accessKey;


            })
            .catch(err => {
                if (err.response && err.response.status === 401)
                    return history.push('/');

                if (err.response)
                    setError(err.response.data);
                else
                    setError(err.message);
            })

    }, [])

    function onFormSubmit(event) {
        event.preventDefault();
        if (inputNewPassword.current.value || inputConfirmPassword.current.value
            && inputNewPassword.current.value !== inputConfirmPassword.current.value) {
            return setError('The fields NewPassword and ConfirmPassword most be equals!');
        }
        const token = localStorage.getItem('token');
        updateSettings({
            email: inputEmail.current.value,
            password: inputNewPassword.current.value ? inputNewPassword.current.value : null,
            apiUrl: inputApiUrl.current.value,
            streamUrl: inputStreamUrl.current.value,
            accessKey: inputAcessKey.current.value,
            secretKey: inputSecretKey.current.value ? inputSecretKey.current.value : null,
        }, token)
            .then(result => {
                if (result) {
                    setError('');
                    setSuccess('Settings updated successfully!')
                    inputSecretKey.current.value = '';
                    inputNewPassword.current.value = '';
                    inputConfirmPassword.current.value = '';
                } else {
                    setSuccess('');
                    setError(`Can't update the settings.`);
                }

            })
            .catch(error => {
                setSuccess('');
                console.error(error.message);
                setError(`Can't update the settings.`);


            })
    }



    return (

        <React.Fragment>
            <Menu />
            <main className="text-gray-300 bg-dark content">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                    <div className="d-block mb-2 mb mb-0">
                        <h1 className="h4">Settings</h1>
                    </div>
                </div>
                <div className="text-white row">
                    <div className="col-12">
                        <div className="bg-gray-800 card card-body shadow mb-4">
                            <h2 className="h5 mb-4">General Info</h2>
                            {
                                error ?
                                    <div className="alert alert-danger mt-2 col-9py-2">{error}
                                        <buttom className="btn-close" data-bs-dismiss="alert"></buttom>
                                    </div>

                                    : <React.Fragment></React.Fragment>
                            }
                            {
                                success ?
                                    <div className="alert alert-success alert-dismissible mt-2 col-9py-2 fade show">{success}
                                        <buttom className="btn-close" data-bs-dismiss="alert"></buttom>
                                    </div>
                                    : <React.Fragment></React.Fragment>
                            }
                            <form onSubmit={onFormSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input ref={inputEmail} className="bg-gray-800 text-gray-300 border-1 border-dark form-control" id="email" type="email" placeholder="example@gmail.com" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="Password">New Password</label>
                                            <input ref={inputNewPassword} className="bg-gray-800 text-gray-300 border-1 border-dark form-control" id="newpassword" type="password" placeholder="Password" />
                                        </div>
                                    </div>


                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <input ref={inputConfirmPassword} className="bg-gray-800 text-gray-300 border-1 border-dark form-control" id="confirmpassword" type="password" placeholder="ConfirmPassword" />
                                        </div>
                                    </div>
                                </div>
                                <h2 className="h5 my-4">Exchange Info</h2>
                                <div className="row">
                                    <div className="col-sm12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="apiUrl">API URL</label>
                                            <input ref={inputApiUrl} className="bg-gray-800 text-gray-300 border-1 border-dark form-control" id="apiUrl" type="text" placeholder="Enter the API URL." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="streamUrl">Stream URL</label>
                                            <input ref={inputStreamUrl} className="bg-gray-800 text-gray-300 border-1 border-dark form-control" id="streamUrl" type="text" placeholder="Enter the Stream URL." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="accessKey">Access Key</label>
                                            <input ref={inputAcessKey} className="bg-gray-800 text-gray-300 border-1 border-dark form-control" id="accesskey" type="text" placeholder="Enter the Access Key." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="secretKey">Secret Key</label>
                                            <input ref={inputSecretKey} className="bg-gray-800 text-gray-300 border-1 border-dark form-control" id="secretkey" type="password" placeholder="Enter the secret Key." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap">
                                        <div className="col-sm12-3">
                                            <button className="btn btn-success mt-2" type="submit">Save All</button>
                                        </div>

                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <Symbols /> 
            </main>
        </React.Fragment >
    )

}

export default Settings;