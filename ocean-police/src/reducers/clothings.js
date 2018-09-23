import moment from 'moment';
import { PolutionInfoProvider } from '../utils/PolutionInfoProvider';
const seed = {
  '1': {
    name: 'My Favorite Tees',
    id: '1',
    type: 'ShortSleeve',
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
  '3': {
    name: 'Calvin Klein Undies',
    id: '3',
    type: 'Underwear',
    happiness: 'happy',
    materials: [
      {
        type: 'Elastane',
        percentage: 100,
      },
    ],
    washingPeriod: 3,
    dateAdded: 'Sun Sep 22 2018 12:29:01 GMT-0700 (Pacific Daylight Time)'
  },
  '4': {
    name: 'Tees #2',
    id: '4',
    type: 'ShortSleeve',
    happiness: 'happy',
    materials: [
      {
        type: 'Elastane',
        percentage: 100,
      },
    ],
    washingPeriod: 3,
    dateAdded: 'Sun Sep 22 2018 12:29:01 GMT-0700 (Pacific Daylight Time)'
  },
  '5': {
    name: 'Black Jacket',
    id: '5',
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
  '6': {
    name: 'Rain Coat',
    id: '6',
    type: 'Jacket',
    happiness: 'sad',
    materials: [
      {
        type: 'Elastane',
        percentage: 100,
      },
    ],
    washingPeriod: 3,
    dateAdded: 'Sun Sep 22 2018 12:29:01 GMT-0700 (Pacific Daylight Time)'
  },
  '7': {
    name: 'Calvin Klein Undies',
    id: '7',
    type: 'Underwear',
    happiness: 'sad',
    materials: [
      {
        type: 'Elastane',
        percentage: 100,
      },
    ],
    washingPeriod: 3,
    dateAdded: 'Sun Sep 22 2018 12:29:01 GMT-0700 (Pacific Daylight Time)'
  },
  '8': {
    name: 'Jacket #1',
    id: '8',
    type: 'Jacket',
    happiness: 'happy',
    materials: [
      {
        type: 'Elastane',
        percentage: 100,
      },
    ],
    washingPeriod: 3,
    dateAdded: 'Sun Sep 22 2018 12:29:01 GMT-0700 (Pacific Daylight Time)'
  },
  '9': {
    name: 'Dress that my mom bought',
    id: '9',
    type: 'Dress',
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
  '10': {
    name: 'Red Dress',
    id: '10',
    type: 'Dress',
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

let counter = 11;

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
