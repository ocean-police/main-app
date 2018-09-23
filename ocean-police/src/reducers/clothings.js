import moment from 'moment';
import { PolutionInfoProvider } from '../utils/PolutionInfoProvider';
const seed = {
  '1': {
    name: 'my red Tees',
    id: '1',
    type: 'T_SHIRT',
    happiness: 'happy',
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
    dateAdded: 'Sun Sep 23 2018 12:29:01 GMT-0700 (Pacific Daylight Time)',
    washingPeriod: 1,
    
  },
  '2': {
    name: 'Jacket #1',
    id: '2',
    type: 'JACKET',
    happiness: 'medium',
    materials: [
      {
        type: 'Leather',
        percentage: 100,
      },
    ],
    washingPeriod: 3,
    dateAdded: 'Sun Sep 22 2018 12:29:01 GMT-0700 (Pacific Daylight Time)'
  },
};

let counter = 3;

const clothings = (state = seed, action) => {
    switch(action.type) {

      case 'ADD_GARMENT': {
        const newState = {
          ...state,
        }

        const polutionPerWash = (new PolutionInfoProvider()).calculateTotalNumberOfParticlesPerWash(action.garment);

        let happiness = '';

        if (polutionPerWash > 36114) {
          happiness = "sad";
        } else if (polutionPerWash > 18057) {
          happiness = "medium";
        } else {
          happiness = "happy";
        }

        newState[counter++] = {
          ...action.garment,
          dateAdded: new Date(),
          happiness,
          polutionPerWash,
        };
        console.log(newState);
        return newState;
      }


      default: {
        return state;
      }
    }
};

export default clothings;
