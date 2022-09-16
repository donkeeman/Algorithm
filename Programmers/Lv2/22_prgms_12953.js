function eratosthenes(n) {
    let seive = Array(n + 1).fill(true);
    seive[0] = seive[1] = false;
    for (let i = 2; i < Math.sqrt(n) + 1; i++) {
        if (seive[i]) {
            for (let j = i + i; j < n + 1; j += i) {
                if (seive[j]) {
                    seive[j] = false;
                }
            }
        }
    }
    return seive.map((v, i) => v === true && i).filter((x) => x !== false);
}

function solution(arr) {
    let answer = {};
    arr = arr.filter((x) => x > 1);
    let primes = eratosthenes(100);
    for (let i = 0; i < primes.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let count = 0;
            if (arr[j] === 1) {
                continue;
            }
            if (primes[i] > arr[j]) {
                break;
            }
            while (true) {
                if (arr[j] % primes[i] === 0) {
                    count++;
                    arr[j] /= primes[i];
                    if (arr[j] === 1) {
                        break;
                    }
                } else {
                    break;
                }
            }
            if (!answer[primes[i]] || answer[primes[i]] < count) {
                answer[primes[i]] = count;
            }
        }
    }
    arr.map((num) => {
        if (!answer[num]) {
            answer[num] = 1;
        } else {
            answer[num]++;
        }
    });
    return Object.entries(answer)
        .filter(([key, value]) => key !== "1" && value !== 0)
        .map(([key, value]) => parseInt(key) ** value)
        .reduce((a, b) => a * b, 1);
}
