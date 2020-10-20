import { v4 as uuidv4 } from 'uuid';
//Add Expenses
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
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
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//Edit expense 
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})