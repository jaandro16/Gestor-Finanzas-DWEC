import React from "react";
import GridItem from "../GridItem/GridItem";
import * as C from "./GridStyle";

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const confirmDelete = window.confirm("Estas seguro de que quieres eliminar esta transacción?");
    if (confirmDelete) {
      const newArray = itens.filter((transaction) => transaction.id !== ID);
      setItens(newArray);
      localStorage.setItem("transacciones", JSON.stringify(newArray));
    }
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40} scope="col">Descripción</C.Th>
          <C.Th width={40} scope="col">Valor</C.Th>
          <C.Th width={10} alignCenter scope="col">Tipo</C.Th>
          <C.Th width={10} scope="col"></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item) => (
          <GridItem key={item.id} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
