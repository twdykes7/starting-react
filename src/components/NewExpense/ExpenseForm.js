import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [formDisplay, setFormDisplay] = useState('minimizedDisplay');
  // When state depends on previous state use fn below
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //When state depends on previous state use fn below
    //setUSerInput((prevState) => {
    //  return { ...prevState, enteredTitle: event.target.value}
    //  }
    //});
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
    setFormDisplay('minimizedDisplay');
  };

  // if setFormDisplay is not null show form
  // if (setFormDisplay === 'clicked')
  const expandedDisplay = (<form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type='number'
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={() => setFormDisplay('minimizedDisplay')} type="submit">Cancel</button>
      </div>
    </form>
  )
  const minimizedDisplay = (<form>
     <div className="new-expense__mini">
        <button onClick={() => setFormDisplay('expandedDisplay')} type="submit">Add New Expense</button>
      </div>
    </form>
  )

  if(formDisplay === 'expandedDisplay') {
    return (expandedDisplay)
  }
  return (minimizedDisplay)
}

export default ExpenseForm;
