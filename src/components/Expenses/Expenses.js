import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('2020');

  const saveYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          current={selectedYear}
          onChangeYear={saveYearHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses;
