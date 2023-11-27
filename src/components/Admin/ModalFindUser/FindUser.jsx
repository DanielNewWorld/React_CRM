import React, {useState} from 'react';
import styleCSS from './FindUser.module.css';
import {Input} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";

const maxLength = maxLengthCreator(20);

const FindUserForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styleCSS.containerFind}>
                <div><h1>Пошук замовлення</h1></div>
                <div>
                    <Field type="text" placeholder="Знайти по імені..." component={Input} name={"find"}
                           validate={[required, maxLength]}
                    />
                </div>
                <div>
                    <button type="submit" className={styleCSS.menuMark}>Знайти</button>
                </div>
            </div>
        </form>
    )
}

const FindUserReduxForm = reduxForm({
    form: 'findUser'
})(FindUserForm)

const FindUser = (props) => {
    const [isModalOpenFind, setIsModalOpenFind] = useState(false);

    const openModal = () => {
        setIsModalOpenFind(true);
    };

    const closeModal = () => {
        setIsModalOpenFind(false);
    };

    const onSubmit = (formData) => {
        // alert(formData.find);
        props.onGetUser(props.login, props.password, props.currentPage,props.pageSize,formData.find)
        closeModal();
    };

    return (
        <div>
            <button className={styleCSS.menuMark} onClick={openModal}>Find client</button>

            {isModalOpenFind && (
            <div className={styleCSS.modalOverlay}>
                <div className={styleCSS.modalContent}>
                    <FindUserReduxForm onSubmit={onSubmit}/>
                    <button onClick={closeModal}>Закрити</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default FindUser;