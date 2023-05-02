//  1 =>                                           Longest word in String
// const LongestWord = (str) => {
//     let words = str.split(" ");
//     let longestWord = "";

//     for(let word of words){
//         if(word.length > longestWord.length){
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// console.log(LongestWord("Check the longest word in this string"));
// console.log(LongestWord("Hii this the starting task"));


//  2 =>                           check Arthematic or Geometric or return -1
// const Check = (arr) =>{
//    let arth = new Set();
//    let geo = new Set();

//    for(let i=1; i<arr.length; i++){
//      arth.add(arr[i] - arr[i-1]);
//      geo.add(arr[i] / arr[i-1]);
//    }

//    if(arth.size === 1){
//     return "Arthematic";
//    }
//    if(geo.size === 1){
//     return "Geometric";
//    }
//    return -1;
// }

// console.log(Check([2,4,6,8]));   // 2+2=4 , 4+2=6 , 6+2=8      difference is constant [2] b/w adjacent no. when they subtracted.
// console.log(Check([3,9,27]));    // 3*3=9 , 9*3=27             difference is constant [3] b/w adjacent no. when they are divided.
// console.log(Check([2,3,5,8]));


//  3 =>                                         Longest word in String -- 2 [ if two words have same length ]
                                        // Case - I
// const LongestWord = (str) => {
//     let words = str.split(" ");
//     let longestWord = "";

//     for(let word of words){
//         if(word.length >= longestWord.length){
//             longestWord=word;
//         }
//     }
//     return longestWord;
// }

// console.log(LongestWord("I woke up early today"));
// console.log(LongestWord("I went straight to the beach"));


                                 // Case - II
// const Component = (str) =>{
// let words = str.split(" ");
// let longest = "";
// for(let x of words){
//     if(x.length >= longest.length){
//         longest = x;
//     }
// }
// return words.filter((i) => i.length === longest.length)
// }

// console.log(Component("this is a text data"))


//  4 =>                              Captilize the first letter
                              //Case - I
// const Word = (str) => {
//     return str[0].toUpperCase() + str.slice(1)
// }

// console.log(Word("capital"));            // Capital

                              // Case - II
// const Word = (str) =>{
//     const words = str.split(" ");
//     const CapitalWords = words.map((word) => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     return CapitalWords.join(" ");
// }

// console.log(Word("i woke up early today"))            // I Woke Up Early Today
// console.log(Word("i walked straight to the beach"));    // I Walked Straight To The Beach


                              //Unique values
// const Unique = (str) =>{
//     let set = new Set();

//     for(let x of str){
//         set.add(x);
//     }
//     if(set.size === str.length){
//         return true
//     }
//     return false
// }

// console.log(Unique("adcbe"));  //true
// console.log(Unique("ababcd"));  //false

//                                               sum of Array
//const ArraySum = (nums) =>{

//     for(let i=0;i<nums.length-1;i++){
//        for(let j=0;j<nums.length;j++){
//           if(nums[j]>nums[j+1]){
//             [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
//           }
//        }
//     }

//     let max= 0;
//     for(let num of nums){
//         if(num > max){
//             max=num;
//         }
//     }
//    // console.log(max);
//     let sum = 0;
//    for(let i=0;i<nums.length-1;i++){
//        sum = sum + nums[i];
//    }
//    //console.log(sum)
//    if(sum === max){
//     return true;
//    }
//    return false;
// }

                                                        // Efficient way
// const ArraySum = (nums) =>{
//     let sort = nums.sort((a,b) => {
//         return a-b;
//     })
//     let max = sort.pop();
//     const arrSum = sort.reduce((acc, curr) =>{
//         return acc+curr;
//     },0)
    
//     return max === arrSum;
// }                                                        

// console.log(ArraySum([1,6,4,2,13]));
// console.log(ArraySum([2,3,80,6,4,65]));
// console.log(ArraySum([5,3,5,66,5]));

//                                       Unique Object Properties values
// const Products = [
//     { title: "i-phone", company: "apple"},
//     { title: "laptop", company: "HP"},
//     { title: "watch", company: "amazon"},
//     { title: "i-phone", company: "apple"},
//     { title: "laptop", company: "apple"},
//     { title: "mouse", company: "dell"},
//     { title: "i-phone", company: "amazon"},
//     { title: "monitor", company: "dell"},
// ]

// const Component = (products) =>{
//   let companies = products.map((item) => item.company);

//   let title = products.map((item) => item.title);

//   console.log([...new Set(companies)]) ;
//   console.log([...new Set(title)]);
// }

// Component(Products);

