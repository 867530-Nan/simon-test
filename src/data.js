// data.js
const navigationData = [
  {
    id: 1,
    name: "Home",
    children: null,
  },
  {
    id: 2,
    name: "Alerts",
    children: [
      {
        id: 3,
        name: "Usage and examples",
        children: null,
      },
      {
        id: 4,
        name: "Alert",
        children: null,
      },
      {
        id: 5,
        name: "Warning Alert",
        children: null,
      },
    ],
  },
  {
    id: 6,
    name: "Buttons",
    children: [
      {
        id: 7,
        name: "Usage and Examples",
        children: null,
      },
      {
        id: 8,
        name: "Button",
        children: null,
      },
      {
        id: 9,
        name: "Button Group",
        children: null,
      },
    ],
  },
  {
    id: 10,
    name: "Forms",
    children: [
      {
        id: 11,
        name: "Usage and examples",
        children: null,
      },
      {
        id: 12,
        name: "Inputs",
        children: [
          {
            id: 13,
            name: "Credit Card Input",
            children: null,
          },
          {
            id: 14,
            name: "Number Input",
            children: null,
          },
        ],
      },
      {
        id: 15,
        name: "Selectors",
        children: [
          {
            id: 16,
            name: "Checkbox",
            children: null,
          },
          {
            id: 17,
            name: "Date Picker",
            children: null,
          },
          {
            id: 18,
            name: "Radio",
            children: null,
          },
        ],
      },
    ],
  },
];

export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(navigationData);
    }, 1000); // Simulate network delay
  });
}
