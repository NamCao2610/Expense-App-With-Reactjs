import { createStore } from 'redux';

//Action generate functions that return actions object

const increatementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = ({ count = 0 } = {}) => ({
    type: 'RESET',
    count
})

const setCount = ({ count = 0 } = {}) => ({
    type: 'SET',
    count
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: action.count
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increatementCount({ incrementBy: 5 }));

store.dispatch(increatementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));

store.dispatch(decrementCount({ decrementBy: 3 }));



