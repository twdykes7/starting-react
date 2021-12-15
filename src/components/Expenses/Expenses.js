import React, { useState } from 'react';
// import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList'

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('2020');

  const saveYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  }

  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          current={selectedYear}
          onChangeYear={saveYearHandler}
        />
        <ExpensesList items={filteredYear} />
      </Card>
    </div>
  )
}

export default Expenses;
