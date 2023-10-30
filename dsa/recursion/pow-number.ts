let temp

function pow(a: number, b:number): any {
  b = Math.floor(b)
  if(b == 0){
    return 1;
  }
  temp = pow(a, b/2);
  if(b % 2 != 0) {
    return temp * temp * a;
  } else {
    return temp * a;
  }
}

console.log("=====>", pow(3,5));
