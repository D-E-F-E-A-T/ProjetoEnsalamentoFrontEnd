import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Dialog from "../../components/ModalDialog/Index";

const FormDialog = ({ isOpen, handleClose }) => {
  return (
    <Dialog
      open={isOpen}
      handleClose={handleClose}
      dialogTitle="Adicionar Prédio"
      dialogContent="Teste"
      dialogActions="Teste"
    />
  );
};
