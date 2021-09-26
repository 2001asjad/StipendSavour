import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":20,"category":"Travel","type":"Expense","date":"2021-09-21","id":"31a9b46c-983c-4908-bfc9-48d802e9403a"},{"amount":50,"category":"Business","type":"Income","date":"2021-09-20","id":"2fe3ed44-1c06-4df0-8c74-620fc97a204f"},{"amount":100,"category":"Salary","type":"Income","date":"2021-09-20","id":"2a3fe3df-0b34-497b-b9d7-6adee7c5f192"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer , initialState);

    const deleteTransaction = (id) => {
        dispatch({type: 'DELETE_TRANSACTION', payload: id})
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
      };
    
    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            transactions,
            balance
         }} >
            {children}
        </ExpenseTrackerContext.Provider>
    )
}