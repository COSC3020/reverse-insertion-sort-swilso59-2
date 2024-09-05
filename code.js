function insertionSort(arr) {
  // Change this function such that it works from the end of the array rather than the beginning
  for(var i = arr.length-1; i >= 0; i--) {
    var val = arr[i];
    // The inner for loop needs to be adjusted.   
    for(var j = i; j < arr.length && arr[j + 1] < val; j++) {
      arr[j] = arr[j + 1];
    }
    arr[j] = val;
  }
  return arr;
}
