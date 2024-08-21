// let num=153;
// let s=num.toString();
// let arr=s.split("");
// console.log(arr);
// let sum=0;
// console.log(arr);
// for(let i=0;i<arr.length;i++){
//     sum=sum+(arr[i]*arr[i]*arr[i]);
    // console.log(sum);
// }
// if(sum===num){
//     console.log(`${num} is a armstrong`);
// }
// else{
//     console.log(`${num} is not a armstrong`);
// }

for(let i=100;i<300;i++){
let num=i;    
let res=num;
let digit;
let sum=0;
while(num>0){
    digit=num%10;
    num=Math.floor(num/10);
    sum=sum+(digit*digit*digit);
}
if(sum===res){
    console.log(`${res} is a armstrong`);
}
// else{
// console.log(`${res} is not a armstrong`);
// }
}