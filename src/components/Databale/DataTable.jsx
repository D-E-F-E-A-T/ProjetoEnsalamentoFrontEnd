import React from "react";
import MUIDataTable from "mui-datatables";
import PropTypes from "prop-types";

const DataTable = props => {
  const [data, columns, options] = props;

  return <MUIDataTable data={data} columns={columns} options={options} />;
};

DataTable.propType = {
  value: PropTypes.object.isRequired,
  index: PropTypes.object.isRequired,
  change: PropTypes.object.isRequired
};

export default DataTable;
