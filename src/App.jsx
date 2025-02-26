import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Global from "./styles/global";
import Resume from "./components/Resume/Resume";
import Form from "./components/Form/Form";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
  };

  return [storedValue, setValue];
};

const formatAmount = (amount) => `${Number(amount).toFixed(2)} €`;

const App = () => {
  const [transactionsList, setTransactionsList] = useLocalStorage("transactions", []);
  const [financialSummary, setFinancialSummary] = useState({ income: 0, expense: 0, total: 0 });

  useEffect(() => {
    const { totalIncome, totalExpense } = transactionsList.reduce(
      (acc, transaction) => {
        const amount = Number(transaction.amount);
        transaction.expense ? (acc.totalExpense += amount) : (acc.totalIncome += amount);
        return acc;
      },
      { totalIncome: 0, totalExpense: 0 }
    );

    setFinancialSummary({
      income: formatAmount(totalIncome),
      expense: formatAmount(totalExpense),
      total: formatAmount(Math.abs(totalIncome - totalExpense))
    });
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const updatedTransactions = [...transactionsList, transaction];
    setTransactionsList(updatedTransactions);
  };

  return (
    <>
      <Header />
      <Resume income={financialSummary.income} expense={financialSummary.expense} total={financialSummary.total} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
      <Global />
    </>
  );
};

export default App;
