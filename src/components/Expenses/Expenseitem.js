
import React from 'react';

import ExpenseDate from "./ExpenseDate.js";
import "./Expenseitem.css";

import Card from '../Ui/Card.js';
 
const  Expenseitem =(props)=>{
  // document.getElementById('root').addEventListener()
  const clickHandler=()=>{
    console.log('clicked')
  }
    return (
        <>
        <Card className="expense-item">
          <ExpenseDate date={props.date}></ExpenseDate>
          
          <div className="expense-item-description">
        <h2>{props.title}</h2>
        <div className="expense-item-price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>change Title</button>
        </Card>
        </>
      );
}
export default Expenseitem;



