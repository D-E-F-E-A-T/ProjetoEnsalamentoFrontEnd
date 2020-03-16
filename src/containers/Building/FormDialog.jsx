import React from "react";
import Dialog from "../../components/ModalDialog/Index";
import TesteForm from "./Form";

const FormDialog = ({ modalIsOpen, handleClickCloseFormBuilding }) => {
  const SubmitBuilding = () => {};
  return (
    <Dialog
      open={modalIsOpen}
      handleClose={handleClickCloseFormBuilding}
      title="Cadastrar Prédio"
      contentText="Informações para cadastro do prédio"
      content={<TesteForm submitBuilding={SubmitBuilding} />}
    />
  );
};

export default FormDialog;
