function findmin(arr){
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(min>arr[i]){
            min =arr[i];
           // arr[i]=min;
        }

    }
return min;

}
findmin([2,3,-1,-4,3,2,1]);






function sumOdd(arr){
    let sum=0;
    
    for(let i=0;i<=arr.length;i++){
        if(i% 2!==0){
            sum+=arr[i];
           
        }
    }

    return sum;
} 

console.log(sumOdd[1,3,4,6,7,2]);

function sum (arr1,arr2){
    let result=[];
    for(let i=0;i<arr1.length;i++){
      result[i]=arr1[i]+arr2[i];
    }

   return result;
}

console.log((sumOdd[1,2,3,4,5] , [5,4,3,2,1]))