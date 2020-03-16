const columns = [
  { title: "Nome", field: "name" },
  {
    title: "Status",
    field: "active",
    lookup: { true: "Ativo", false: "Inativo" }
  }
];

export default columns;
