const columns = [
  { title: "Name", field: "name" },
  {
    title: "Status",
    field: "status",
    lookup: { 0: "Ativo", 1: "Inativo" }
  }
];

export default columns;
