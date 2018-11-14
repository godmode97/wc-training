require('./helpers');

// transform data to a new one.
// Use pure functions to transform an object

const cities = ['Makati', 'Quezon', 'Pasig', 'Caloocan', 'Calamba'];
const citiesCopy = [...cities];

// Array.concat() is a pure function
const concatCitiesCopy = citiesCopy.concat('Malabon');
citiesCopy.log('citiesCopy');
concatCitiesCopy.log('concatCitiesCopy');

const joinedCities = cities.join(', ');

cities.log('cities');
joinedCities.log('joinedCities');

// Array.filter is a pure function
const filteredCities = cities.filter(city => city[0] === 'C');

filteredCities.log('filteredCities');
cities.log('cities');

// Array.map() is a pure function
const mappedCitiesCopy = citiesCopy.map(city => `${city} City`);
mappedCitiesCopy.log('mappedCitiesCopy');

// Array.pop() is not a pure function
const poppedCitiesCopy = citiesCopy.pop();
citiesCopy.log('citiesCopy.pop()');
poppedCitiesCopy.log('poppedCitiesCopy');

// Array.push() is not a pure function
citiesCopy.push(poppedCitiesCopy);
citiesCopy.log('citiesCopy.push(poppedCitiesCopy)');

// Array.sort is not a pure function .
const sortedCities = citiesCopy.sort();
sortedCities.log('sortedCities');
citiesCopy.log('citiesCopy.sort()');

cities.log();

const citylist = [
  {
    name: 'Caloocan',
    region: 'NCR'
  },
  {
    name: 'Abra',
    region: 'I'
  }
]

const editCities = (oldCityName, name, array) => (
  array.map((arr) => (
    (arr.name === oldCityName)? {...arr, name} : arr
  ))
);

editCities('Caloocan', 'Kaloocan', citylist).log(); //  [ { name: 'Caloocan', region: 'NCR' },
                                                    //  { name: 'Abra', region: 'I' } ]
