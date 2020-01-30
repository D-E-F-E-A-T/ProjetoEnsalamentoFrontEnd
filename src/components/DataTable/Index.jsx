/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const Datatable = ({ columns, data, labelButton }) => {
  return (
    <MaterialTable
      title="Prédios"
      columns={columns}
      data={data}
      options={{
        actionsColumnIndex: -1
      }}
      actions={[
        {
          icon: "edit",
          tooltip: "Editar",
          onClick: (event, rowData) => alert("Deseja Editar " + rowData.name)
        },
        {
          icon: "delete",
          tooltip: "Excluir",
          onClick: (event, rowData) => alert("deseja Excluir " + rowData.name)
        }
      ]}
      components={{
        Toolbar: props => (
          <div style={{ backgroundColor: "#e8eaf5" }}>
            <div style={{ padding: "10px 10px" }}>
              <Button variant="contained" color="primary">
                {labelButton}
              </Button>
            </div>
            <MTableToolbar {...props} />
          </div>
        )
      }}
    />
  );
};

Datatable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  columns: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  labelButton: PropTypes.string.isRequired
};

export default Datatable;
