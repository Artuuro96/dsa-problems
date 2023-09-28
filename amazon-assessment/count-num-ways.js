/*
Amazon is working on a new hashing approach that takes in the original string and a seed number.

Engineers decided that the seed can be generated from the same input string by counting the number of times 
a reverse of a substring of length k makes the new string lexicographically smaller. 
You are deployed with the task of developing a service that takes in a string s and an integer k, 
and returns the number of ways to reverse any substring of length k such that the resulting string is lexicographically 
smaller than the original string.
Notes:
• A substring is a contiguous sequence of characters within a string. For example, the string "zon" is a substring of "amazon", "zone", etc. but is not a substring of "zoin", "zozo", etc.
• A string a is lexicographically smaller than string b if a[if < b[il at the first index where a and b differ. For example, "amazon" is lexicographically smaller than
"amozan".
Example
S= "'amazon" k=3 output=3
*/

function countNumWays(s, k) {
    let numWays = 0;
    const str = s.split('');
    for(let i = 0; i < str.length - (k-1); i++){
        let substring = '';
        let leftComp = ''
        let rigthComp = ''
    
        for(let j = i; j<k+i; j++){
            substring += str[j]
        }
        
        if(i<1) {
            leftComp = '';
            rigthComp = getRightComp(str, i+k);
        } else {
            rigthComp = getRightComp(str, i+k);
            leftComp = getLeftComp(str, i);
        }
        const reversed = substring.split('').reverse().join('');
        const finalString = leftComp + reversed + rigthComp;
        if(isLexSmaller(finalString, s)){
            numWays++;
        }
    }
    
    return numWays;
}

function isLexSmaller(finalString, str) {
    return finalString < str;
}

function getLeftComp(str, start) {
    let leftComp = '';
    for (let c = 0; c < start; c++){
        leftComp += str[c];
    }
    return leftComp;
}

function getRightComp(str, end) {
    let rightComp = '';
    for (let c = end; c < str.length; c++){
        rightComp += str[c];
    }
    return rightComp;
}

console.log(countNumWays('amazon', 2));
console.log(countNumWays('ababa', 2));