import React from 'react';
import styleCSS from './Header.module.css';
import logo from '../../images/logo.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={styleCSS.header}>
            <div className={styleCSS.gridHeader}>
                <div>
                    <nav className={styleCSS.menuLine}>
                        <div><NavLink to="/">
                            <img alt="" src={logo} className={styleCSS.logo}/>
                        </NavLink></div>
                        <div className={styleCSS.menuItem}></div>
                        <div className={styleCSS.menuItem}>
                            {props.isAuth ?
                                <NavLink to="/admin"
                                         className={styleCSS.menuNavlink}>
                                    {props.login}
                                </NavLink>
                                : <NavLink to="/login"
                                           className={styleCSS.menuNavlink}>
                                    Увійти
                                </NavLink>}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;