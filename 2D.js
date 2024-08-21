let arr=[[1,2,3],[4,5,6],[7,8,9]];

// arr[i]=[1,2,3]        arr[i][0]=0      arr[i][arr[i].length-1]

let item=9;

let loc=[];

for(let i=0;i<arr.length;i++){
    if(arr[i][0]===item){
        loc.push(i);
        loc.push(0);
    }
    else if(arr[i][arr[i].length-1]===item){
        loc.push(i);
        loc.push(arr[i].length-1);
    }
    else if(arr[i][0]<item && arr[i][arr[i].length-1]>item){
        let start=0;
        let end=arr[i].length-1;
        let mid=Math.floor((start+end)/2);
        while(start<=end){
            if(arr[i][mid]===item){
                loc.push(i);
                loc.push(mid);
                break;
            }
            else if(arr[i][mid]>item){
                end=mid-1;
            }
            else if(arr[i][mid]<item){
                start=mid+1;
            }
        }
    }
}
console.log(loc);
