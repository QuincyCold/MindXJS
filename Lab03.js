let binarySearch = function( arr,  l,  r,  x){
  if (r >= l) {
    let mid = Math.floor((l + r)/2);
    if (arr[mid] === x)
      return mid;
    if (arr[mid] > x)
      return binarySearch(arr, l, mid - 1, x);

    return binarySearch(arr, mid + 1, r, x);
  }
 
  // Nếu không tìm thấy
  return -1;
}
 
arr = [2, 3, 4, 10 , 40,43,56,76,78];
n = arr.length;
x = 3;
result = binarySearch(arr, 0, n - 1, x);
if (result === -1)
  console.log("khong tim thay phan tu")
else
  console.log(" tim thay phan tu x ")
