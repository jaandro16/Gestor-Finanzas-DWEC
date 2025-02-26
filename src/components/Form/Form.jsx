import React, { useState } from "react";
import * as C from "./FormStyle";
import Grid from "../Grid/Grid";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  // Función para generar un ID único para cada transacción
  const generateID = () => Math.round(Math.random() * 1000);

  // Función para guardar la transacción
  const handleSave = () => {
    // Validaciones más claras con mensajes de error personalizados
    if (!desc.trim() || !amount) {
      alert("Todos los campos deben estar completos!");
      return;
    } else if (Number(amount) <= 0) {
      alert("El valor debe ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc,
      amount: Number(amount), // Convertir a número directamente
      expense: isExpense,
    };

    handleAdd(transaction);

    // Limpiar los campos después de agregar la transacción
    setDesc("");
    setAmount("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descripcion</C.Label>
          <C.Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Ex: Compra supermercado"
          />
        </C.InputContent>

        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ex: 100,50"
          />
        </C.InputContent>

        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            checked={!isExpense}  // Invertir lógica para que "Entrada" sea el valor predeterminado
            name="group1"
            onChange={() => setExpense(false)} // Simplificar el cambio de estado
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>

          <C.Input
            type="radio"
            id="rExpenses"
            checked={isExpense}  // Establecer el estado según `isExpense`
            name="group1"
            onChange={() => setExpense(true)} // Simplificar el cambio de estado
          />
          <C.Label htmlFor="rExpenses">Salida</C.Label>
        </C.RadioGroup>

        <C.Button onClick={handleSave}>AÑADIR</C.Button>
      </C.Container>

      {/* Componente Grid para mostrar las transacciones */}
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
