import React from 'react';
import {Navigate} from 'react-router-dom';
import styleCSS from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Input} from "../../Common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";

const maxLength = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit} className={styleCSS.formCSS}>
                <h1>Авторізуйтеся</h1>
                <div>
                    <Field type="text" placeholder="Логін" component={Input} name={"login"}
                           validate={[required, maxLength]}/>
                </div>

                <div>
                    <Field placeholder="Пароль" component={Input} name={"password"} type={"password"}
                           validate={[required, maxLength]}/>
                </div>

                <div>
                    <Field
                        component={Input}
                        type="checkbox"
                        name={"rememberMe"}
                        label={"Запам'ятати мене"}/>
                </div>

                <div>
                    <button type="submit">Увійти</button>
                </div>
            </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        // console.log(formData)
        // alert(formData.password);
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/admin"} replace={true}/>
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login})(Login)