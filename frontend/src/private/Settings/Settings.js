import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { getSettings } from "../../services/SettingsService";
import { doLogout } from '../../services/AuthService';

function Settings() {

    const history = useHistory();

    const [error, setError] = useState('');

    const [settings, setSettings] = useState({
        email: '',
        apiUrl: '',
        accessKey: '',
        keySecret: ''

    })
    useEffect(() => {

        const token = localStorage.getItem("token");

        getSettings(token)
            .then(response => {
                setSettings(response);
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

    function onLogoutClick(event) {
        const token = localStorage.getItem('token');
        doLogout(token)
            .then(response => {
                localStorage.removeItem('token');
                history.push('/');
            })
            .catch(err => {
                setError(err.message);

            })

    }

    return (


        <main>
            <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
                <div className="container">
                    {settings.email}
                    <button type="button" className="btn btn-primary" onClick={onLogoutClick}>Logout</button>
                    {
                        error
                            ? <div className="alert alert-danger"> {error}</div>
                            : <React.Fragment></React.Fragment>
                    }

                </div>

            </section>
        </main>
    )

}

export default Settings;