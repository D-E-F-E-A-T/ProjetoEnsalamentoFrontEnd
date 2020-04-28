/* eslint-disable react/prop-types */
import React from "react";
import MUIDataTable from "mui-datatables";
import PropTypes from "prop-types";

const DataTable = props => {
  const { data, columns, options } = props;
  return <MUIDataTable data={data} columns={columns} options={options} />;
};

DataTable.propType = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired
};

export default DataTable;
