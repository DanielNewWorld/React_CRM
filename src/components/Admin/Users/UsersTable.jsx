import React from 'react';
import styleCSS from "./User.module.css";

let Users = () => {
    return <div className={styleCSS.containerTable}>
        <div className={styleCSS.long}>Дата</div>
        <div className={styleCSS.long}>ФІО</div>
        <div className={styleCSS.long}>Номер телефону</div>
        <div className={styleCSS.long}>Статус</div>
        <div className={styleCSS.long}>id</div>
    </div>
}

export default Users;