import styleCSS from "./Logout.module.css";
import React from "react";

const Logout = (props) => {
    return <div>
        <button onClick={props.onLogout} className={styleCSS.menuMark}>
            Вийти
        </button>
    </div>
}

export default Logout;