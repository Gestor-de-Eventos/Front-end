const columns = [
  { name: "NOMBRE", uid: "name" },
  { name: "ROL", uid: "rol" },
  { name: "EVENTOS", uid: "event" },
  { name: "ACTIONS", uid: "actions" },
];
const users = [
  {
    id: 1,
    name: "Tony Reichert",
    rol: "CEO",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
    event: "Reunión de estrategia",
  },
  {
    id: 2,
    name: "Zoey Lang",
    rol: "Technical Lead",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
    event: "Revisión de sprint",
  },
  {
    id: 3,
    name: "Jane Fisher",
    rol: "Senior Developer",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
    event: "Reunión de equipo",
  },
  {
    id: 4,
    name: "William Howard",
    rol: "Community Manager",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
    event: "Campaña de marketing",
  },
  {
    id: 5,
    name: "Kristen Copper",
    rol: "Sales Manager",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
    event: "Reunión de ventas",
  },
];

export { columns, users };
