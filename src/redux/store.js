import addItemReducer from './addItem-reducer';

let store = {
    _state: {
        homeServicesPage: {
            itemProductData: [{
                id: 1,
                imgSrc: "images/1.jpg",
                nameItem: "Cover"
            },
            {
                id: 2,
                imgSrc: "images/2.jpg",
                nameItem: "Never"
            }]
        }
    },

    _callSubscribe() {
    },

    getState() {
        return this._state;
    },

    subscribe(observe) {
        this._callSubscribe = observe;
    },

    dispatch(action) {
        this._state.homeServicesPage = addItemReducer(this._state.homeServicesPage, action);
        this._callSubscribe(this._state);
    }
}

export default store;
window.store = store;