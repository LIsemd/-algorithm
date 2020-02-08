// 稳定
// 时间复杂度 O(n²)
// 最差时间分析 O(n²)
// 空间复杂度 O(1)

function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    return arr;
}

// test
// const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
// console.log(bubbleSort(arr));