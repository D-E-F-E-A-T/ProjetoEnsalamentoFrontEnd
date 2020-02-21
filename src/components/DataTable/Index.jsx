/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import MaterialTable from "material-table";
import PropTypes from "prop-types";

import Toolbar from "./Toolbar";

const Datatable = ({
  title,
  columns,
  data,
  labelButton,
  actions,
  actionsColumnIndex,
  actionAddData
}) => {
  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      options={{
        actionsColumnIndex
      }}
      actions={actions}
      components={{
        Toolbar: props => <Toolbar labelButton={labelButton} spread={props} actionAddData={actionAddData}/>
      }}
    />
  );
};

Datatable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  columns: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  actions: PropTypes.array.isRequired,
  labelButton: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  actionsColumnIndex: PropTypes.number.isRequired,
  actionAddData: PropTypes.func.isRequired
};

export default Datatable;
