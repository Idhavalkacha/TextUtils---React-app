// This is react function based component.
import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className={`form-control me-2 bg-light`} type="search" placeholder="Search" aria-label="Search" />
                        <button className={`btn btn-outline-${props.mode === 'light' ? 'success' : ''} bg-${props.mode === 'light' ? '' : 'primary'} ${props.mode === 'light' ? '' : 'text-light'}`} type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{marginRight: '20px'}}>
                        <input className="form-check-input" type="checkbox" role="switch" style={{cursor: "pointer"}} onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                        {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{cursor: "pointer"}}>Enable Dark Mode</label> */}

                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">More Dark Themes</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={props.blackColor}>Black</a></li>
                                <li><a className="dropdown-item" href="#" onClick={props.blueColor}>Light blue</a></li>
                                <li><a className="dropdown-item" href="#" onClick={props.greyColor}>Grey</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </nav>
    )
}

// defining the datatype of the props, which we are using in this component.
// isRequired is use for kind of if we forgot to pass the porps, also didn't use the default then isRequired will throw an error.
Navbar.propTypes  = {title: PropTypes.string.isRequired}

// this is default props, if we've not passed the porps then this default props will be used (konsi value use kre if aapne koi bhi props pass nahi kiye hai to).
Navbar.defaultProps = {about: "About"};

