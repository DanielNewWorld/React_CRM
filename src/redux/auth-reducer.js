import {authAPI} from "../api/api";

const SET_ADMIN_DATA = 'SET_ADMIN_DATA';

let initialState = {
    adminID: null,
    login: null,
    password: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMIN_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

export const setAuthAdminData = (adminID, login, password, isAuth) => {
    return {
        type: SET_ADMIN_DATA,
        payload: {adminID, login, password, isAuth}
    }
}

export const getAuthAdminData = (login, password) => async (dispatch) => {
    const response = await authAPI.me(login, password);
    // console.log("auth: " + response.data.resultCode)
    if (response.data && response.data.resultCode === 0) {
        let {_id, login, password} = response.data.data;
        dispatch(setAuthAdminData(_id, login, password, true))
    }
}

export const login = (login, password, rememberMe) => async (dispatch) => {
    try {
        const response = await authAPI.login(login, password, rememberMe)
        if (response.data && response.data.resultCode === 0) {
            let {_id, login, password} = response.data.data;
            // console.log("login form response: " + login)
            dispatch(setAuthAdminData(_id, login, password, true));
        } else {
            alert(response.data.messages);
        }
    } catch (error) {
        console.log(error);
    }
}

export const logout = () => {
    return (dispatch) => {
        try {
            // const response = authAPI.logout().then(data => {
                // console.log("items: " + data.items[0].id)
                // if (response.data && response.data.resultCode === 0) {
                    dispatch(setAuthAdminData(null, null, null, false))
                // }
            // })
        } catch (error) {
            console.log(error);
        }
    }
}

export default authReducer;