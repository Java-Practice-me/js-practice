var nums1 = [1,2,3,0,0,0];
var m = 3; 
var nums2 = [2,5,6]; 
n = 3;
// var res=[];
// for(let i=0;i<m;i++){
//     res[i]=nums1[i];
// }
let co=0;
for(var j=m;j<m+n;j++){
    nums1[j]=nums2[co]
    co=co+1;
}
// console.log(nums1);

for(var s=0;s<nums1.length;s++){
    for(var t=0;t<nums1.length;t++){
        if(nums1[t]>nums1[t+1]){
            let temp=nums1[t];
            nums1[t]=nums1[t+1];
            nums1[t+1]=temp;
        }
    }
}
// console.log(nums1);