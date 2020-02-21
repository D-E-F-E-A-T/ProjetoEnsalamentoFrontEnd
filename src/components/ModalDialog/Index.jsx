import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";

const ModalDialog = ({
  open,
  handleClose,
  dialogTitle,
  dialogContent,
  dialogActions
}) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
        <DialogActions>{dialogActions}</DialogActions>
      </Dialog>
    </div>
  );
};

ModalDialog.propTypes = {
  open: PropTypes.func.isRequired,
  labelButton: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  actionsColumnIndex: PropTypes.number.isRequired,
  actionAddData: PropTypes.func.isRequired
};

export default ModalDialog;
