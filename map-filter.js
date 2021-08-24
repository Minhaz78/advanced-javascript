 //mapping difference process:-
 const number = [2,3,4,5,6,7,8];
// const output =[];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result= element * element;
//     output.push(result);
    
// }
// //console.log(output);

// 2)const result = number.map(function(element){
//     return element * element;
// })
// //console.log(result);
// //map can take 3 parameters
//  3)number.map(function(element,index,array){
//     //console.log(element,index,array);
// })
// 4)const result = number.map(element => element*element);
// console.log(result);

//example of  filter
const result = number.filter(element => element<5);
const isThere = number.filter(element => element>5);

console.log(result,isThere);

