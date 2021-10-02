import React, {useState} from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpenseForm from '../NewExpense/ExpenseForm';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')


  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
    console.log('In App.js');
    console.log(selectedYear);
  }

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onFilterChange={filterChangeHandler}
        />
        {props.items.map((expense) => (
            <ExpenseItem 
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date}
            />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;