import React from "react";
import * as C from './ResumeStyle';
import ResumeItems from "../../ResumeItems/ResumeItems";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItems title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItems title="Salidas" Icon={FaRegArrowAltCircleDown} value={expense} />
      <ResumeItems title="TOTAL" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
}

export default Resume;
