import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import DataTable from "../../components/DataTable/Index";
import Columns from "./Columns";
import Actions from "../../Common/Datatable/ActionsDefault";
import ModalDialogForm from "./FormDialog";
import { selectBuildings } from "../../store/selectors/BuildingSelector";
import { Types as BuildingTypes } from "../../store/ducks/Building";

const BuildingList = () => {
  const [modalIsOpen, SetModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  const buildings = useSelector(selectBuildings);

  useEffect(() => {
    dispatch({ type: BuildingTypes.LOAD_REQUEST });
  }, [dispatch]);

  const handleClickOpenFormBuilding = () => {
    SetModalIsOpen(true);
  };
  const handleClickCloseFormBuilding = () => {
    SetModalIsOpen(false);
  };

  return (
    <>
      <DataTable
        title="Prédios"
        columns={Columns}
        data={buildings}
        labelButton="Adicionar Prédio"
        actionAddData={handleClickOpenFormBuilding}
        actions={Actions}
        actionsColumnIndex={-1}
      />
      <ModalDialogForm
        modalIsOpen={modalIsOpen}
        handleClickCloseFormBuilding={handleClickCloseFormBuilding}
      />
    </>
  );
};

export default BuildingList;
