/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { MTableToolbar } from "material-table";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const Datatable = ({ labelButton, spread, actionAddData }) => {
  return (
    <div style={{ backgroundColor: "#e8eaf5" }}>
      <div style={{ padding: "10px 10px" }}>
        <Button variant="contained" color="primary" onClick={actionAddData}>
          {labelButton}
        </Button>
      </div>
      <MTableToolbar {...spread} />
    </div>
  );
};

Datatable.propTypes = {
  labelButton: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  spread: PropTypes.array.isRequired,
  actionAddData: PropTypes.func.isRequired
};

export default Datatable;
