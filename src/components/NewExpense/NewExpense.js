import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  // const [formView, setFormView] = useState('');

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }

  return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  </div>
};

export default NewExpense;

/*
The goal is to toggle the expense form

initial state -> the form only contains a button
that reads Add Expense

secondary state -> the form contains the title, amount and date
fields, but also a cancel button

On page load show the initial state
Once button is clicked show the add expense form
--if form is submitted or cancel button clicked
--reload with initial state
*/