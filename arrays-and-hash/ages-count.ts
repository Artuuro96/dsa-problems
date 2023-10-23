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

const ages = [1,2,1,2,1,3,2];


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

function agesCount2(numbers: number[]) {
  let minors = 0;
  let adults = 0;
  const groups: Array<{[key: number]: number}> = [];
  const group: { [key: number]: number } = {};
  numbers.forEach((number, i) => {
    if(number <= 18) {
      minors++;
    } else {
      adults++
    }
    group[number] = group[number] === undefined ? 1 : group[number] + 1
  })
  Object.keys(group).forEach((key: any) => {
    groups.push({
      [key]: group[key]
    });
  })
  return {
    minors, 
    adults,
    groups
  }
}

console.log(agesCount(ages));
console.log(agesCount2(ages));


