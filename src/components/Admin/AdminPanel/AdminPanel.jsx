import React, {Suspense} from 'react';
import UsersContainer from "../Users/UsersContainer";
import Preloader from "../../Common/Preloader/Preloader";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const AdminPanel = (props) => {
    if (props.isAuth) {
        return (
            <div>
                <Suspense fallback={<div><Preloader/></div>}>
                    <UsersContainer/>
                </Suspense>
            </div>
        );
    } else {
        return <Navigate to={"/login"} replace={true}/>
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {})(AdminPanel)
