import moment from 'moment';
import { PolutionInfoProvider } from '../utils/PolutionInfoProvider';
const seed = {
  '1': {
    name: 'my red Tees',
    id: '1',
    type: 'Short Sleeve',
    happiness: 'happy',
    materials: [
      {
        type: 'Wool',
        percentage: 50,
      },
      {
        type: 'Cotton',
        percentage: 25,
      },
      {
        type: 'Polypropylene',
        percentage: 25,
      },
    ],
    dateAdded: 'Sun Sep 23 2018 12:29:01 GMT-0700 (Pacific Daylight Time)',
    washingPeriod: 1,
    
  },
  '2': {
    name: 'Jacket #1',
    id: '2',
    type: 'Jacket',
    happiness: 'medium',
    materials: [
      {
        type: 'Elastane',
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

        const currentCounter = counter++;

        newState[currentCounter] = {
          ...action.garment,
          dateAdded: new Date(),
          happiness,
          polutionPerWash,
          id: currentCounter,
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
