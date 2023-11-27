import React, {useState} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from "../../Common/FormsControls/FormsControls";
import styleCSS from './ModalAddUserRedux.module.css';
import {containsDigitsValidator, maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength = maxLengthCreator(20);

const AddForm = reduxForm({form: 'addUser'})((props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styleCSS.container}>
                <div><h1>Додати замовлення</h1></div>
                <Field
                    type="text"
                    placeholder="Ім'я"
                    component={Input}
                    name={"first_name"}
                    validate={[required, maxLength]}
                    className={styleCSS.container}
                />

                <Field
                    type="text"
                    placeholder="Номер телефону"
                    component={Input}
                    name={"phone"}
                    validate={[required, containsDigitsValidator, maxLength]}
                />

                <div><button className={styleCSS.menuMark} type="submit">
                    Додати
                </button></div>
        </form>
    );
});

const ModalAddUserRedux = (props) => {
    const [isModalOpenAdd, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = (formData) => {
        props.onAddUser(props.login, props.password, props.currentPage, props.pageSize, formData);
        handleClose();
    };

    return (
        <div>
            <button onClick={handleOpen} className={styleCSS.menuMark}>
                Додати замовлення
            </button>

            {isModalOpenAdd && (
                <div className={styleCSS.modalOverlay}>
                    <div className={styleCSS.modalContent}>
                        <AddForm onSubmit={onSubmit}/>
                        <button onClick={handleClose}>Закрити</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalAddUserRedux;