function solution(n, quests) {
  const temp = new Array(n + 1).fill().map(() => ({
    befores: [],
  }));

  quests.sort((a, b) => (a[0] <= b[0] ? -1 : 1));

  quests.forEach(([before, key]) => temp[key].befores.push(before));

  const answer = [];

  function check(key) {
    if (temp[key].pushed) return;
    temp[key].befores.forEach((before) => {
      check(before);
    });
    answer.push(key);
    temp[key].pushed = true;
  }

  for (let i = 1; i <= n; i++) {
    check(i);
  }

  return answer;
}
console.time("calculatingTime");
console.log(
  solution(10, [
    [6, 2],
    [3, 2],
    [4, 1],
    [5, 7],
    [5, 4],
    [10, 3],
    [9, 10],
  ])
);
console.timeEnd("calculatingTime");
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// [5, 4, 1, 9, 10, 3, 6, 2, 7, 8];
