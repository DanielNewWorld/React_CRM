import userItemReducer, {addItem} from './userItem-reducer';

test('new user should be added', () => {
    //1. test data
    let action = addItem();
    let state = {
        items: [],
        pageSize: 5,
        totalCount: 0,
        currentPage: 1,
        isFetching: true
    }

    //2. action
    let newState = userItemReducer(state, action);

    //3. expectation
    expect(newState.items.length).toBe(2);
});