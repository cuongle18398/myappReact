import React from "react";
import './Nav.scss'
import {
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <>
                <div className="topnav">
                    <NavLink activeclassName="active" to="/" exact={true}>Home</NavLink>
                    <NavLink activeclassName="active" to="/todo">Todo</NavLink>
                    <NavLink activeclassName="active" to="/about">About</NavLink>
                    <NavLink activeclassName="active" to="/user">Users</NavLink>
                </div >
            </>
        )
    }
}

export default Nav;