import firmReducer, {toggleIsMobile} from "./firm-reducer";

test('new user should be added', () => {
    //1. test data
    let action = toggleIsMobile();
    let state = {
        name: "S&D UPHOLSTERY",
        telephone: "470-922-8060",
        email: "sanddupholstery@gmail.com",
        isMobile: window.innerWidth <= 768 // Значение ширины для определения мобильного устройства
    }

    //2. action
    let newState = firmReducer(state, action);

    //3. expectation
    expect(newState.isMobile).toBe(false);
});