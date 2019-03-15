import React from 'react';
import {Link}  from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <img src="/logo.png" className="logo"/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" style={{ justifyContent: 'flex-end', flex: 3 }}>
                            <li className="nav-item">
                                <Link className="nav-link" to="/react" >React Js</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/redux" >Redux</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/express" >Express</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/node" >Node</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;