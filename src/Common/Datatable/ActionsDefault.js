const Actions = [
  {
    icon: "edit",
    tooltip: "Editar",
    // eslint-disable-next-line no-alert
    onClick: (event, rowData) => alert(`Deseja Editar ${rowData.name}`)
  },
  {
    icon: "delete",
    tooltip: "Excluir",
    // eslint-disable-next-line no-alert
    onClick: (event, rowData) => alert(`Deseja Excluir ${rowData.name}`)
  }
];

export default Actions;
