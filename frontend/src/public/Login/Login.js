import React from 'react';
import {Link, useHistory} from 'react-router-dom';

function Login () {

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
                                Back to Home Page
                                </Link>
                                <div className="col-12 d-flex align-items-center justify-content-center">
                                    <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                        <div className="text-center">
                                            
                                        </div>
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