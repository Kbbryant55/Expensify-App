const getExpensesTotal = (expenses) => {
    return expenses
    .map((expense) => expense.amount)
    .reduce((result, value) => result + value, 0);
}

export default getExpensesTotal;