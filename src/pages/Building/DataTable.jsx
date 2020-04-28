import React from "react";
import DataTable from "../../components/Databale/DataTable";

const BuildingDatatable = () => {
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
        customBodyRender: value => {
          return value ? "Sim" : "Não";
        }
      }
    },
    {
      name: "Add",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta) => {
          return (
            // eslint-disable-next-line react/button-has-type
            <button
              onClick={() => {
                console.log("data", tableMeta.rowData);
              }}
            >
              Add
            </button>
          );
        }
      }
    }
  ];

  const data = [
    {
      id: 1,
      name: "Prédio 1",
      active: true
    },
    {
      id: 2,
      name: "Prédio 2",
      active: true
    },
    {
      id: 3,
      name: "Prédio 3",
      active: false
    },
    {
      id: 4,
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

  return <DataTable data={data} columns={columns} options={options} />;
};

export default BuildingDatatable;
