//const name = "0";


// when condition is false
// 1)if you not set variable value
// 2)name=null
//3)name=NaN
//4)name=false

//when condition is true
//1)'0' and ' '(space inside)
//2)name=[];
//3)name={};
//4)name ='false'

let name=0;
if(name || name==0){
    console.log("condition is true");

}
else{
    console.log("condition is false");
}