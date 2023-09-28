// create a function to know how many adults and minors we have in the array c and gruop them with times that the age is repeated
//input [12,13,45,32,34,23,45,12,34,56,23,12,11,18,19];
//Output
/*
  {
    minors: 2, // num of minors 
    adults: 6, // num of adults
    group:[
          // Ex. {12: 3}, {13: 1}
    ]
  }
*/

const ages = [12,13,45,32,34,23,45,12,34,56,23,12,11,18,19];


function groupNumbers(number: number, personMap: Map<number, number[]>){
  if(!personMap.has(number)){
    personMap.set(number, []);
  }
  personMap.get(number)?.push(number);
}

function agesCount(numbers: number[]){
  let minors = 0;
  let adults = 0;
  const personMap = new Map<number, number[]>();
  numbers.forEach(number => {
    if(number <= 18) {
      minors++;
    } else {
      adults++
    }
    groupNumbers(number, personMap);
  })
  const group = Array.from(personMap, ([key, value]) => ({ [key]: value.length }));
  return {
    minors,
    adults,
    group
  }  
}

function agesCount2(ages: number[]){
  let countMinors = 0;
  let countAdults = 0;
  let group: {[key: number]: number} = {};
  ages.forEach(age => {
    if(age < 18) {
      countMinors++;
    } else {
      countAdults++;
    }
    group[age]++;
  })
}

console.log(agesCount2(ages));
console.log(agesCount(ages));



