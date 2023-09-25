
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

console.log(agesCount(ages));



