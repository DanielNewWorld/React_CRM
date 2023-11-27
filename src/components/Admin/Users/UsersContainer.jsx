import React from 'react';
import {connect} from 'react-redux';
import {
    requestAddUsers,
    requestUsers,
    requestDeleteUsers, requestUpdateUsers
} from '../../../redux/userItem-reducer';
import Users from './Users';
import Preloader from '../../Common/Preloader/Preloader';
import {compose} from "redux";
import {getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from "../../../redux/users-selectors";
import FindUser from "../ModalFindUser/FindUser";
import styleCSS from './User.module.css';
import ModalAddUserRedux from "../ModalAddUserRedux/ModalAddUserRedux";
import Logout from "../Logout/Logout";
import {logout} from "../../../redux/auth-reducer";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.login, this.props.password, this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(this.props.login, this.props.password, pageNumber, this.props.pageSize);
    }

    render() {
        return <div>
                <div className={styleCSS.containerMenu}>
                    <button onClick={this.onPageChanged} className={styleCSS.menuMark}>
                        Всі замовлення
                    </button>

                    <ModalAddUserRedux
                        onAddUser={this.props.addUserThunkCreator}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        login={this.props.login}
                        password={this.props.password}
                    />

                    <FindUser
                        onGetUser={this.props.getUsersThunkCreator}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        login={this.props.login}
                        password={this.props.password}
                    />

                    <Logout
                        onLogout={this.props.logout}
                        login={this.props.login}
                        password={this.props.password}
                    />
                </div>

                {this.props.isFetching ? <Preloader/> : null}
                <Users totalCount={this.props.totalCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       data={this.props.data}
                       onDeleteUser={this.props.deleteUsersThunkCreator}
                       onUpdateUser={this.props.updateUsersThunkCreator}
                       login={this.props.login}
                       password={this.props.password}
                />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        data: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        password: state.auth.password
    }
}

export default compose(
    connect(mapStateToProps, {
        addUserThunkCreator: requestAddUsers,
        getUsersThunkCreator: requestUsers,
        deleteUsersThunkCreator: requestDeleteUsers,
        updateUsersThunkCreator: requestUpdateUsers,
        logout
    })
    //,
    //withAuthRedirect
)(UsersAPIComponent)