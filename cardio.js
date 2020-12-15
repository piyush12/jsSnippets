const arr1 = [
  ["name", "id", "age", "weight", "Cool"],
  ["Susan", "3", "20", "120", true],
  ["John", "1", "21", "150", true],
  ["Bob", "2", "23", "90", false],
  ["Ben", "4", "20", "100", true],
];

const arr2 = [
  ["name", "id", "height"],
  ["Bob", "2", "50"],
  ["John", "1", "45"],
  ["Ben", "4", "43"],
  ["Susan", "3", "48"],
];

const arr3 = [
  ["name", "id", "parent"],
  ["Bob", "2", "yes"],
  ["John", "1", "yes"],
];
function parseArray(arr) {
  const [heading, ...data] = arr;
  const array = data.reduce((acc, data, index) => {
    const personObj = {};
    for ([i, head] of heading.entries()) {
      personObj[head] = data[i];
    }
    return [...acc, personObj];
  }, []);
  return array;
}
const allData = [...parseArray(arr1), ...parseArray(arr2), ...parseArray(arr3)];

const mergedArray = allData.reduce((acc, item) => {
  let existingIndex = acc.findIndex(
    (arr) => parseInt(arr.id) === parseInt(item.id)
  );
  if (existingIndex >= 0) {
    acc[existingIndex] = {
      ...acc[existingIndex],
      ...item,
    };
    return acc;
  }
  return [...acc, item];
}, []);

// ====================================

///// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];
// 1. Filter the list of inventors for those who were born in the 1500's

const filterInventors = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1600
);
// console.table(filterInventors);

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
const fullName = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);

//console.log(fullName);

// Sort the inventors by birthdate, oldest to youngest
const sortedArray = [...inventors].sort((a, b) => a.year - b.year);
//console.table(sortedArray);

//How many years did all the inventors live all together?

const allInventorslived = inventors.reduce((acc, item) => {
  const totalyear = acc + (item.passed - item.year);
  return totalyear;
}, 0);
// console.log(allInventorslived);

//Sort the people alphabetically by last name

const sortPeople = people.sort((a, b) => {
  const [aFirst, aLast] = a.split(", ");
  const [bFirst, bLast] = b.split(", ");
  return aLast > bLast ? 1 : -1;
});
// console.table(sortPeople);

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];
const sumUp = data.reduce((acc, item) => {
  if (!acc[item]) {
    acc[item] = 0;
  }
  acc[item]++;
  return acc;
}, {});

// console.log(sumUp);

var arr = [1, 2, 3, 4, 5, 6];
[arr[3], arr[1]] = [arr[1], arr[3]];
//var filtered = arr.filter((i) => i !== 2);
//filtered.splice(3, 0, 2);
///console.log(arr);

///// chunk array

function chunkArray(array, length) {
  const copyArray = [...array];
  let chunkedArray = [];
  for (let i = 0; i < array.length; i += length) {
    chunkedArray.push(copyArray.slice(i, i + length));
  }
  return chunkedArray;
}

//console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

function checkPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// 10 - 7 + 5 + 3 + 2

function sumOfAllPrime(num) {
  let total = 0;
  for (let i = 2; i < num; i++) {
    if (checkPrime(i)) {
      total += i;
    }
  }
  return total;
}
console.log(sumOfAllPrime(10));
