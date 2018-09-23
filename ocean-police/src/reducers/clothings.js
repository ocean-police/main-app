const seed = {
  '1': {
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
    washingPeriod: 1,
  },
  '2': {
    name: 'Jacket #1',
    type: 'JACKET',
    materials: [
      {
        type: 'Leather',
        percentage: 100,
      },
    ],
    washingPeriod: 3,
  },
};

let counter = 3;

const clothings = (state = seed, action) => {
    switch(action.type) {

      case 'ADD_GARMENT': {
        const newState = {
          ...state,
        }

        newState[counter++] = action.garment;
        console.log(newState);
        return newState;
      }


      default: {
        return state;
      }
    }
};

export default clothings;
