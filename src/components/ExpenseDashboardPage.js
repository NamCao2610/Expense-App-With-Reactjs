import React from 'react';
import ExpenseListFilter from './ExpenseListFilter';
import ExpenseList from './ExpensesList';
const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;