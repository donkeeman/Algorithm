var arr = [200, 100, 300];

// splice는 추가 및 제거 둘 다 가능
// splice(i, j, k): 인덱스 i로부터 j개의 숫자를 제거한 후 k를 삽입 (j = 0이면 아무 원소도 제거하지 않고 array[i] = k 가 됨)
arr.splice(2, 0, 10000);

console.log(arr);