import {usersAPI} from "../api/api";

const SET_BD = 'SET-BD';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    items: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true
}

const userItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BD: //getUsers
            return {
                ...state,
                items: [...action.items]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
}

const setBD = (items) => {
    return {
        type: SET_BD,
        items
    }
}

const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

const setTotalUserCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        count: totalCount
    }
}

const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const requestUsers = (login, password, page, pageSize, firstname) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    try {
        const response = await usersAPI.getUsers(login, password, page, pageSize, firstname)
        dispatch(toggleIsFetching(false));
        if (response.data && response.resultCode === 0) {
            // console.log("result count: " + response.totalCount)
            dispatch(setBD(response.data));
            dispatch(setTotalUserCount(response.totalCount));
        } else {
            alert(response.data.messages)
        }
    } catch (error) {
        console.log(error);
    }
}

export const requestAddUsers = (login, password, page, pageSize, formData) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    try {
        const response = await usersAPI.addUsers(login, password, page, pageSize, formData)
        console.log("resp: " + response.data)
        dispatch(toggleIsFetching(false));
        if (response.data && response.resultCode === 0) {
            dispatch(setBD(response.data));
            dispatch(setTotalUserCount(response.totalCount));
        } else {
            alert(response.data.messages)
        }
    } catch (error) {
        console.log(error);
    }
}

export const requestDeleteUsers = (login, password, page, pageSize, firstname, id) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    try {
        const response = await usersAPI.deleteUsers(login, password, page, pageSize, firstname, id)
        dispatch(toggleIsFetching(false));
        if (response.data && response.resultCode === 0) {
            dispatch(setBD(response.data));
            dispatch(setTotalUserCount(response.totalCount));
        } else {
            alert(response.data.messages)
        }
    } catch (error) {
        console.log(error);
    }
}

export const requestUpdateUsers = (login, password, page, pageSize, dataForm, id) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    try {
        const response = await usersAPI.updateUsers(login, password, page, pageSize, dataForm, id)
        dispatch(toggleIsFetching(false));
        if (response.data && response.resultCode === 0) {
            dispatch(setBD(response.data));
            dispatch(setTotalUserCount(response.totalCount));
        } else {
            alert(response.data.messages)
        }
    } catch (error) {
        console.log(error);
    }
}

export default userItemReducer;