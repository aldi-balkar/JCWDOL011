function disctincWays(n) {
    /*
    n = 2
    outout = 2
    1. 1step + 1step
    2. 2step

    n = 3
    output = 3
    1. 1step + 1step + 1step
    2. 1step + 2step
    3. 2step + 1step

    n = 4
    output = 5
    1. 1step + 1step + 1step + 1step
    2. 1step + 1step + 2step
    3. 1step + 2step + 1step
    4. 2step + 1step + 1step
    5. 2step + 2step

    n = 5
    output = 8
    1. 1step + 1step + 1step + 1step + 1step
    2. 1step + 1step + 1step + 2step
    3. 1step + 1step + 2step + 1step
    4. 1step + 2step + 1step + 1step
    5. 2step + 1step + 1step + 1step
    6. 1step + 2step + 2step
    7. 2step + 1step + 2step
    8. 2step + 2step + 1step

    n = 6
    output = 13
    1. 1step + 1step + 1step + 1step + 1step + 1step
    2. 1step + 1step + 1step + 1step + 2step
    3. 1step + 1step + 1step + 2step + 1step
    4. 1step + 1step + 2step + 1step + 1step
    5. 1step + 2step + 1step + 1step + 1step
    6. 2step + 1step + 1step + 1step + 1step
    7. 1step + 1step + 2step + 2step
    8. 1step + 2step + 1step + 2step
    9. 1step + 2step + 2step + 1step
    10. 2step + 1step + 1step + 2step
    11. 2step + 1step + 2step + 1step
    12. 2step + 2step + 1step + 1step
    13. 2step + 2step + 2step
    */

    return fibonacci(n + 1);

}

function fibonacci(N_FIBONACCY) {
    let currentResult = 1
    let lastResult = 0
    if (N_FIBONACCY === 0) {
        return 0
    } else {
        for (let i = 0; i < N_FIBONACCY - 1; i++) {
            const tempLastResult = currentResult
            currentResult = lastResult + currentResult
            lastResult = tempLastResult
        }

        return currentResult
    }
}

console.log(`Total kemungkinn = ${disctincWays(5)}`);