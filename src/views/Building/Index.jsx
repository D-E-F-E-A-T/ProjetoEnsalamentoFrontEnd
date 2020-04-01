import React from "react";
import MUIDataTable from "mui-datatables";
import { Switch, FormControlLabel } from "@material-ui/core";

const BuildingView = () => {
  const columns = [
    {
      name: "id",
      label: "id",
      options: {
        filter: false,
        display: "excluded"
      }
    },
    {
      name: "name",
      label: "Nome",
      options: {
        filter: true
      }
    },
    {
      name: "active",
      label: "Ativo",
      options: {
        filter: true,
        filterOptions: {
          names: ["Ativo", "Inativo"]
        },
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <FormControlLabel
              label={value ? "Sim" : "Não"}
              value={value}
              control={<Switch color="primary" checked={value} value={value} />}
              onChange={event => {
                updateValue(event.target.value !== "true");
              }}
            />
          );
        }
      }
    }
  ];

  const data = [
    {
      name: "Prédio 1",
      active: true
    },
    {
      name: "Prédio 2",
      active: true
    },
    {
      name: "Prédio 3",
      active: false
    },
    {
      name: "Prédio 4",
      active: true
    }
  ];

  const options = {
    selectableRows: "none",
    print: false,
    download: false,
    responsive: "scrollMaxHeight",
    filterType: "dropdown",
    textLabels: {
      body: {
        noMatch: "Nenhum registro encontrado!"
      },
      filter: {
        all: "Todos",
        title: "Filtros",
        reset: "Limpar Filtros"
      }
    }
  };
  return (
    <MUIDataTable
      title="Prédios"
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default BuildingView;
