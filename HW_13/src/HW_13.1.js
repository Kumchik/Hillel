function fibonacciMemo(n, memo = {}) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (memo[n]) return memo[n];
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

console.log(fibonacciMemo(12));