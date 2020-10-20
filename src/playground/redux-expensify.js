import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
//Add Expenses
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expenses: {
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

//Remove expenses 
const removeExpense = ({ id = 0 } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//Edit expense 
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//set text filter
const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
})

//sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

//sort by date
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

//set start date 
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

//Get visibled expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expenses
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
}

const filterReducerDefaultState = {
    text: '',
    sortBy: 'data',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
}))

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({ note: 'Nam dep zai', amount: 300, createdAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseTwo.expenses.id }));

// store.dispatch(editExpense(expenseOne.expenses.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount()); //amount

// store.dispatch(sortByDate()); //date

// store.dispatch(setStartDate(125));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'jdsjkasksdkfsalfa',
        description: 'Janurary Jane',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'Rent',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Jen',
    age: 34
}

console.log({
    age: 27,
    ...user,
    location: 'Philadelphia'
})