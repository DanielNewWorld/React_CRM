// import { reducer as formReducer } from 'redux-form';

// const formAddReducer = formReducer.plugin({
//     addUser: (state, action) => {
//         return state;
//     }
// });

export const SUBMIT_FORM = 'SUBMIT_FORM';
const formAddReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_FORM:
            // Обработка отправки формы, например, вызов API
            alert("dispath api");
            console.log('Form submitted with data:', action.payload);
            return state;
        default:
            return state;
    }
};

export const requestAddUsersForm = (page, pageSize, firstname) => {
    return (dispatch) => {
        dispatch({ type: SUBMIT_FORM, payload: firstname })
        // dispatch(toggleIsFetching(true));
        // dispatch(setCurrentPage(page));

        try {
            // usersAPI.getUsers(page, pageSize, firstname).then(data => {
            //     dispatch(toggleIsFetching(false));
            //     dispatch(setBD(data.items));
            //     dispatch(setTotalUserCount(data.totalCount));
                // console.log("items: " + data.items[0].id)
            // })
        } catch (error) {
            console.log(error);
        }
    }
}

export default formAddReducer;