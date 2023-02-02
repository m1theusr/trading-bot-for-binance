import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { doLogout } from '../../services/AuthService';
import SideBarItem from './SideBarItem';

function SideBar() {

    const history = useHistory();



    function cleanAndRedirect() {
        localStorage.removeItem('token');
        history.push('/');
    }
    function onLogoutClick(event) {
        doLogout(localStorage.getItem('token'))
            .then(response => cleanAndRedirect())
            .catch(error => {

                console.error(error);
                cleanAndRedirect()
            })


    }
    return (<React.Fragment>
        <nav id="sidebarMenu" className="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
            <div className="sidebar-inner px-4 pt-3">

                <ul className="nav flex-column pt-3 pt-md-0">

                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link d-flex align-items-center">
                            <span className="sidebar-icon">
                                <img src="/img/brand/mr_green.png" height="60" width="63" alt="MR-Trading"></img>
                            </span>
                            <span className="mt-1 ms-1 sidebar-text">Overview</span>
                        </Link>
                    </li>

                    <SideBarItem to="/dashboard" text="Dashboard">
                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    </SideBarItem>

                    <SideBarItem to="/automations" text="Automations">
                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                    </SideBarItem>

                    <SideBarItem to="/transactions" text="Transactions">
                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>
                    </SideBarItem>

                    <SideBarItem to="/settings" text="Settings">
                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                    </SideBarItem>

                    <SideBarItem to="/calendar" text="Calendar">
                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd"></path></svg>
                    </SideBarItem>

                    <SideBarItem to="/map" text="Map">
                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </SideBarItem>

                    <li className="nav-item">
                        <span
                            className="nav-link  collapsed  d-flex justify-content-between align-items-center"
                            data-bs-toggle="collapse" data-bs-target="#submenu-app">
                            <span>
                                <span className="sidebar-icon">
                                    <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                                </span>
                                <span className="sidebar-text">Tables</span>
                            </span>
                            <span className="link-arrow">
                                <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </span>
                        </span>
                        <div className="multi-level collapse "
                            role="list" id="submenu-app" aria-expanded="false">
                            <ul className="flex-column nav">
                                <li className="nav-item ">
                                    <a className="nav-link" href="../pages/tables/bootstrap-tables.html">
                                        <span className="sidebar-text">Bootstrap Tables</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <span
                            className="nav-link  collapsed  d-flex justify-content-between align-items-center"
                            data-bs-toggle="collapse" data-bs-target="#submenu-pages">
                            <span>
                                <span className="sidebar-icon">
                                    <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                </span>
                                <span className="sidebar-text">Page examples</span>
                            </span>
                            <span className="link-arrow">
                                <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </span>
                        </span>
                        <div className="multi-level collapse " role="list"
                            id="submenu-pages" aria-expanded="false">
                            <ul className="flex-column nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="../pages/examples/sign-in.html">
                                        <span className="sidebar-text">Sign In</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="../pages/examples/sign-up.html">
                                        <span className="sidebar-text">Sign Up</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="../pages/examples/forgot-password.html">
                                        <span className="sidebar-text">Forgot password</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="../pages/examples/reset-password.html">
                                        <span className="sidebar-text">Reset password</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <span
                            className="nav-link  collapsed  d-flex justify-content-between align-items-center"
                            data-bs-toggle="collapse" data-bs-target="#submenu-components">
                            <span>
                                <span className="sidebar-icon">
                                    <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                </span>
                                <span className="sidebar-text">Components</span>
                            </span>
                            <span className="link-arrow">
                                <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </span>
                        </span>
                        <div className="multi-level collapse " role="list"
                            id="submenu-components" aria-expanded="false">
                            <ul className="flex-column nav">
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank"
                                        href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/components/accordions/">
                                        <span className="sidebar-text">All Components</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="../pages/components/buttons.html">
                                        <span className="sidebar-text">Buttons</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="../pages/components/notifications.html">
                                        <span className="sidebar-text">Notifications</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="../pages/components/forms.html">
                                        <span className="sidebar-text">Forms</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="../pages/components/modals.html">
                                        <span className="sidebar-text">Modals</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="../pages/components/typography.html">
                                        <span className="sidebar-text">Typography</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
                    <li className="nav-item">

                        <SideBarItem to="/" text="Logout" onClick={onLogoutClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg>
                        </SideBarItem>

                    </li>
                </ul>
            </div>
        </nav>

    </React.Fragment >)
}

export default SideBar;