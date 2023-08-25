function findSingleOne(arr) {
    const map = Array(Math.max(...arr) + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
      map[arr[i]]++;
    }
    console.log(map);
    let result = []
    for (let i = 0; i < map.length; i++) {
        if (map[i] === 1) {
            result.push(i)
        }
    }
    return result
}

const result = findSingleOne([1, 1, 2, 2, 3, 4, 4, 5, 5])
console.log(result)

// syarat int > 0