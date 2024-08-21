let arr=[2,3,4,5,6,7];
let item=6;
let loc;
let start=0;
let end=arr.length-1;

let mid=Math.floor((start+end)/2);

while(start<=end){
    if(arr[mid]===item){
        loc=mid;
        break;
    }
    else if(arr[mid]<item){
        start=mid+1;
    }
    else if(arr[mid]>item){
        end=mid-1;
    }
    mid=Math.floor((start+end)/2);
}

console.log(loc);

