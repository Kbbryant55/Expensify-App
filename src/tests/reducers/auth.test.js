import authReducer from '../../reducers/auth';

test('Should set uid for Login', () => {
    const action = { type: 'LOGIN', uid: 12345};
    const state = authReducer({}, action);
    expect(state.uid).toBe(12345);
});

test('Should clear uid for Logout', () => {
    const action = { type: 'LOGOUT'};
    const state = authReducer({ uid: 'anything'}, action);
    expect(state).toEqual({});
});