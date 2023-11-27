import React, {useState} from 'react';
import styleCSS from './ModalUpdateUser.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength = maxLengthCreator(20);

const ElementUserForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styleCSS.container}>
                <div><h1>Внесіть оновлення</h1></div>
                <div>
                    <Field
                        type="text"
                        placeholder={props.findElement}
                        component={Input}
                        name={props.nameUpdate}
                        validate={[required, maxLength]}
                    />
                </div>
                <div>
                    <button type="submit" className={styleCSS.menuMark}>Оновити</button>
                </div>
            </div>
        </form>
    )
}

const ElementUserReduxForm = reduxForm({
    form: 'elementUser'
})(ElementUserForm)

const ModalUpdateUser = (props) => {
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);

    const openModal = () => {
        setIsModalOpenUpdate(true);
    };

    const closeModal = () => {
        setIsModalOpenUpdate(false);
    };

    const onSubmit = (formData) => {
        // alert(formData.firstnameUpdate);
        props.onUpdateUser(props.login, props.password, props.currentPage, props.pageSize, formData, props.selectedID)
        closeModal();
    };

    return (
        <div>
            <div onClick={openModal} className={styleCSS.container}>
                <div className={styleCSS.menuMark}>{props.elementValue}</div>
            </div>

            {isModalOpenUpdate && (
            <div className={styleCSS.modalOverlay}>
                <div className={styleCSS.modalContent}>
                    <ElementUserReduxForm
                        onSubmit={onSubmit}
                        findElement={props.elementValue}
                        nameUpdate={props.name}
                    />
                    <button onClick={closeModal}>Закрити</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default ModalUpdateUser;