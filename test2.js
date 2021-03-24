function solution(arr, k) {
  arr.sort((a, b) => b - a);
  let start = 0;
  let end = arr.length - 1;
  while (end > start) {
    const sum = arr[start] + arr[end];
    if (sum === k) return true;
    else if (sum < k) start++;
    else j--;
  }
  return false;
}
console.log(solution([2, 3, 41, 2, 4, 2, 13, 4, 3, 5, 0, 2, 4, -1, 3], 9));
