import React from 'react';

function NavBar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-gray-900 px-4 col-12 d-lg-none">
                <a className="navbar-brand me-lg-5" href="/dashboard">
                    <img className="navbar-brand" src="/img/brand/mr-green.svg" alt="mr-trading"></img>
                </a>
                <div class="d-flex align-items-center">
                    <button class="navbar-toggler d-lg-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div> 

            </nav>
        </React.Fragment>
    );

}

export default NavBar;
