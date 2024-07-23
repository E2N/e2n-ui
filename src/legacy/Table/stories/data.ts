export type Contract = {
  id: number;
  type: string;
  validUntil: Date;
};

export type Location = {
  id: number;
  locationGroupId: number;
  name: string;
  key: string;
  numberOfEmployees: number;
  maxNumberOfEmployees: number;
  contract: Contract;
  createdAt: Date;
  updatedAt?: Date;
};

export const data: Location[] = [
  {
    id: 0,
    locationGroupId: 2342,
    name: 'FooBar',
    key: 'foobar100',
    numberOfEmployees: 25,
    maxNumberOfEmployees: 30,
    contract: {
      id: 0,
      type: 'Paket S',
      validUntil: new Date('2099-12-31'),
    },
    createdAt: new Date('2022-07-01'),
    updatedAt: new Date(),
  },
  {
    id: 1,
    locationGroupId: 4728234,
    name: 'Café Einzigartig',
    key: 'einzigartig',
    numberOfEmployees: 5,
    maxNumberOfEmployees: 10,
    contract: {
      id: 0,
      type: 'Stillgelegt',
      validUntil: new Date('2099-12-31'),
    },
    createdAt: new Date('2015-06-01'),
    updatedAt: new Date('2022-01-01'),
  },
  {
    id: 783,
    locationGroupId: 4728234,
    name: 'Café Einzigartig',
    key: 'einzigartig',
    numberOfEmployees: 5,
    maxNumberOfEmployees: 10,
    contract: {
      id: 0,
      type: 'Stillgelegt',
      validUntil: new Date('2099-12-31'),
    },
    createdAt: new Date('2015-06-01'),
    updatedAt: new Date('2022-01-01'),
  },
];

export type Data = {
  id: number;
  name: string;
  numberOfLocations: number;
};

export const defaultData: Data[] = [
  {
    id: 0,
    name: 'Bilbo',
    numberOfLocations: 4,
  },
  {
    id: 1,
    name: 'Gandalf the Grey',
    numberOfLocations: 3,
  },
  {
    id: 1,
    name: 'Frodo',
    numberOfLocations: 234,
  },
  {
    id: 783,
    name: 'Gandalf the Grey',
    numberOfLocations: 3,
  },
  {
    id: 783,
    name: 'Frodo',
    numberOfLocations: 234,
  },
];

export const defaultDataWithManyEntries = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
].map(() => {
  return {
    id: 1,
    name: 'Frodo',
    numberOfLocations: 234,
  };
});
