const seed = {
  '001': {
    name: 'my red Tees',
    type: 'T_SHIRT',
    materials: [
      {
        type: 'POLYESTER',
        percentage: 50,
      },
      {
        type: 'COTTON',
        percentage: 25,
      },
      {
        type: 'METAL',
        percentage: 25,
      },
    ],
    washingFrequency: 1,
  },
  '002': {
    name: 'Jacket #1',
    type: 'JACKET',
    materials: [
      {
        type: 'Leather',
        percentage: 100,
      },
    ],
    washingFrequency: 3,
  },
};

const clothings = (state = seed, action) => {
    switch(action.type) {
    default: {
      return state;
    }
  }
};

export default clothings;
