import React from "react";
import MaterialTable from "material-table";
import { red } from "@material-ui/core/colors";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import EditOutline from "@material-ui/icons/EditOutlined";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Nome", field: "name" },
      {
        title: "Ativo",
        field: "active",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
      }
    ],
    data: [
      {
        name: "Mehmet",
        surname: "Baran",
        birthYear: 1987,
        birthCity: 63,
        id: 1
      },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34,
        id: 2
      }
    ]
  });

  return (
    <MaterialTable
      title="Prédios"
      columns={state.columns}
      data={state.data}
      actions={[
        {
          icon: () => <EditOutline />,
          tooltip: "Editar",
          onClick: (event, rowData) => {
            console.warn("Editar", rowData);
          }
        },
        {
          icon: () => <DeleteOutline style={{ color: red.A700 }} />,
          tooltip: "Excluir",
          onClick: (event, rowData) => {
            console.warn("Excluir", rowData);
          }
        }
      ]}
      options={{
        headerStyle: {
          backgroundColor: "#d1d1d1",
          color: "#000"
        }
      }}
    />
  );
}
