import { createStore } from 'redux';

//Action generators return action objects

// const add = ({ a, b }) => {
//     return a + b ;
// }
// console.log(add({a: 1 , b: 12} ));

const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
});
const decrementCount = ({decrementBy = 1} = {}) => {

};

//reducers
//1. Reducers are pure functions
//2. Never change state or action

const countReducer = (state = { count: 0 }, action)=> {
    switch(action.type){
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            };
        case 'SET': 
            return {
                count: action.count
            };
        case 'RESET': 
            return {
                count: 0
            };
        default:
            return state;
    }
    
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});


//Actions - than an object gets sent to the store

//I'd like to increment
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch({
    type: 'RESET'
});

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch({
    type: 'SET',
    count: 101
});


