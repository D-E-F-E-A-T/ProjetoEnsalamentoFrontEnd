import React from "react";

import DataTable from "../../components/DataTable/Index";
import Columns from "./Columns";

const Data = [
  { name: "Prédio 1", status: 0 },
  {
    name: "Prédio 2",
    status: 1
  }
];

const BuildingList = () => {
  return (
    <DataTable columns={Columns} data={Data} labelButton="Adicionar Prédio" />
  );
};

export default BuildingList;
