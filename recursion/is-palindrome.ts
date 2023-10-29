function isPalindrome(str: string, init: number, end: number): boolean {
  if(str[init] === str[end] && init < end){
    isPalindrome(str, init + 1, end - 1);
  } else {
    return false;
  }
  return true;
}

console.log(isPalindrome('radar', 0, 'radar'.length - 1));
console.log(isPalindrome('poop', 0, 'poop'.length - 1));
console.log(isPalindrome('kokokolol', 0, 'kokokolol'.length - 1));