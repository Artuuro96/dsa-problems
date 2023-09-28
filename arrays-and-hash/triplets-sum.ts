Given an array of n integers arr, and a sum k, you need to return count of triplets with the sum k(Duplicate triplets are allowed).

arr[] : {1,3,2,4,1,3,4,2}, k = 5
Output: 4 //{1,2,2}, {2,1,2}, {1,3,1}, {1,1,3}
above 4 Outputs does not include permutations, its 4 times because every time we are considering different index of elements. (1,2 and 3 appear twice, so considering different indices everytime, we get output 4)