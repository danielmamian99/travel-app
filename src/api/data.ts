import { Itinerary } from "../interfaces";

export const data:Itinerary[] = [
  {
    day: 1,
    activitys: [
      {
        type: "start",
        icon: "",
        labels: ["Ciudad de Origen"],
      },
      {
        type: "transport",
        icon: "airplane",
        labels:
          ["Vuelo (1.5h) (No incluido, lo podemos organizar por ti)"],
      },
      {
        type: "place",
        icon: "",
        labels: ["Llegada a Pto. Inírida"],
      },
      {
        type: "location",
        icon: "location",
        name: "Los Cerros Sagrados",
        subtitle: "Travesía en lancha (2h) desde Puerto Inírida",
        labels: ["Visita a los Cerros de Mavicure, Pajarito y Mono <br/> Visita a las comunidades del Remanso y Venado"],
      },
      {
        type: "lunch",
        icon: "lunch",
        labels:
            ["Almuerzo en Comunidad Indigena"],
      },
      {
        type: "location",
        icon: "location",
        name: "Cerro Diablo",
        subtitle: "Travesía en lancha (2h) desde Puerto Inírida",
        labels: ["Caminata y escalada al atardecer"],
      },
      {
        type: "acommodation",
        icon: "bed",
        labels:
            ["Alojamiento y cena en cabañas indígenas"],
      },
    ],
  },
  {
    day: 2,
    activitys: [
      {
        type: "location",
        icon: "location",
        name: "Ascenso al Cerro Mavicure",
        subtitle: "",
        labels: ["Para deleitarse con los paisajes del escudo guayanés"],
      },
      {
        type: "location",
        icon: "location",
        name: "Caño San Joaquín",
        subtitle: "",
        labels:
          ["El “oasis del Guainía”, te estremecerá con sus aguas color naranja"],
      },
      {
        type: "lunch",
        icon: "lunch",
        labels: ["Almuerzo en Comunidad Indigena"],
      },
      {
        type: "transport",
        icon: "ship",
        labels: ["Desplazamiento a la comunidad La Ceiba"],
      },
      {
        type: "location",
        icon: "location",
        name: "Ictiofauna Nocturna",
        subtitle: "",
        labels:
          ["def. Ictiofauna: Conjunto de peces de una zona acuática acotada"],
      },
      {
        type: "accommodation",
        icon: "bed",
        labels: ["Alojamiento y cena en cabañas indígenas"],
      },
    ],
  },
];


