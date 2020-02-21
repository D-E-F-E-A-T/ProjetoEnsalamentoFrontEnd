import React from "react";

import DataTable from "../../components/DataTable/Index";
import Columns from "./Columns";
import Actions from "../../Common/Datatable/ActionsDefault";
import Form from "./FormDialog";

const Data = [
  { name: "Prédio 1", status: 0 },
  {
    name: "Prédio 2",
    status: 1
  }
];

const BuildingList = () => {
  const [openFormBuilding, setOpenFormBuilding] = React.useState(false);

  const handleClickOpenFormBuilding = () => {
    setOpenFormBuilding(true);
  };

  const handleCloseFormBuilding = () => {
    setOpenFormBuilding(false);
  };

  return (
    <>
      <DataTable
        columns={Columns}
        data={Data}
        labelButton="Adicionar Prédio"
        actionAddData={handleClickOpenFormBuilding}
        actions={Actions}
        actionsColumnIndex={-1}
      />
      <Form
        isOpen={openFormBuilding}
        handleClose={handleCloseFormBuilding}
      />
    </>
  );
};

export default BuildingList;
