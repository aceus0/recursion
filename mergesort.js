
function MergeSort(arr){
  
  if(arr.length > 1) {
  let half = Math.floor(arr.length / 2);
  
  let low = MergeSort(arr.slice(0, half));
  let high = MergeSort(arr.slice(half, arr.length));

  return Merge(low, high);
  } else {
    return arr;
  }

}

function Merge(arr1, arr2){

  let sortedArr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }

  return [...sortedArr, ...arr1, ...arr2]
}

let unsorted = [3, 2, 1, 13, 8, 5, 0, 1, 10];

console.table(MergeSort(unsorted));
