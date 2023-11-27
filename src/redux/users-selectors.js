export const getUsers = (state) => {
    return state.userData.items;
}

export const getPageSize = (state) => {
    return state.userData.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.userData.totalCount;
}

export const getCurrentPage = (state) => {
    return state.userData.currentPage;
}

export const getIsFetching = (state) => {
    return state.userData.isFetching;
}