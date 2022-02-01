const continents = [
  {
    _id: 1,
    name: 'Africa',
  },
  {
    _id: 2,
    name: 'Europe',
  },
  {
    _id: 3,
    name: 'Asia',
  },
  {
    _id: 4,
    name: 'North America',
  },
  {
    _id: 5,
    name: 'South America',
  },
  {
    _id: 6,
    name: 'Australia',
  },
  {
    _id: 7,
    name: 'Antartica',
  },
];

const price = [
  {
    _id: 0,
    name: 'Any',
    array: [],
  },
  {
    _id: 1,
    name: '$0 to $299',
    array: [0, 299],
  },
  {
    _id: 2,
    name: '$300 to $599',
    array: [300, 599],
  },
  {
    _id: 3,
    name: '$600 to $899',
    array: [600, 899],
  },
  {
    _id: 4,
    name: '$900 to $1199',
    array: [900, 1199],
  },
  {
    _id: 5,
    name: 'More than $1200',
    array: [1200, 1500000],
  },
];

export { continents, price };
