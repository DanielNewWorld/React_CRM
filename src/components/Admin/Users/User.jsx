import React, {useState} from 'react';
import styleCSS from './User.module.css';
import DeleteUser from "../ModalDeleteUser/DeleteUser";
import ModalUpdateUser from "../ModalUpdateUser/ModalUpdateUser";
import UsersTable from "./UsersTable";
// import userIMG from '../../../images/User/user.png'

let User = (props) => {
    const [originalDateString] = useState(props.user.date);
    const originalDate = new Date(originalDateString);

    const year = originalDate.getFullYear();
    const month = originalDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
    const day = originalDate.getDate();
    const hours = originalDate.getHours();
    const minutes = originalDate.getMinutes();
    // const seconds = originalDate.getSeconds();

    return <div>
        <UsersTable/>
        <div className={styleCSS.container}>
            {/*<div><img className={styleCSS.imgItem} alt="user"*/}
            {/*          src={userIMG}></img></div>*/}

            <div className={styleCSS.long}>{day}.{month}.{year}   {hours}:{minutes}</div>

            <div className={styleCSS.long}>
                <ModalUpdateUser
                    elementValue={props.user.first_name}
                    name={"first_name"}
                    onUpdateUser={props.onUpdateUser}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    selectedID={props.user._id}
                    login={props.login}
                    password={props.password}
                /></div>

            <div className={styleCSS.long}>{props.user.phone}</div>

            <div className={styleCSS.long}>
            <ModalUpdateUser
                elementValue={props.user.status}
                name={"status"}
                onUpdateUser={props.onUpdateUser}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                selectedID={props.user._id}
                login={props.login}
                password={props.password}
            /></div>

            <DeleteUser
                onDeleteUser={props.onDeleteUser}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                deleteID={props.user._id}
                login={props.login}
                password={props.password}
            />

            <div className={styleCSS.long}>{props.user._id}</div>
        </div>

        <div className={styleCSS.container}>
            <button className={styleCSS.menuMark}>Опис</button>
            <div className={styleCSS.long}>{props.user.description}</div>
        </div>

        <div className={styleCSS.container}>
            <button className={styleCSS.menuMark}>Розмір</button>
            {props.user.polutorka ? <div className={styleCSS.short}>полуторка</div> : null}
            {props.user.doubleBed ? <div className={styleCSS.short}>двуспалка</div> : null}
            {props.user.euro ? <div className={styleCSS.short}>евро</div> : null}
            {props.user.family ? <div className={styleCSS.short}>сімейка</div> : null}
        </div>

        <div className={styleCSS.container}>
            <button className={styleCSS.menuMark}>Колір</button>
            {props.user.polutorka ? <div className={styleCSS.short}></div> : null}
        </div>
    </div>
}

export default User;