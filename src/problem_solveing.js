// const a = [1, 2, 3, 5, 5, 6, 7, 8, 9, 8, 9, 9, 9, 5, 7, 10, 50, 100, 40, 20, ]

// let number = 100

// function getCombinations(arr, num) {
//     let combinations = []
//     arr.map(i => {
//         arr.filter(r => r !== i).map(r => r * i === num && combinations.filter(c=> c.includes(i)).length < 1 && combinations.push([i, r]))
//     })
//     return combinations.length ? combinations : null
// }

// console.log(getCombinations(a, number))

// function isPrime(n) {
//     if (n <= 3) return 'prime'

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return 'not prime'
//         }
//     }

//     return 'prime'
// }

// console.log(isPrime(29))


// function fibinociKey(n) {
//     let fib = []
//     for (let i = 0; fib.length <= n; i++) {
//         if (i === 0) {
//             fib.push(0)
//         }
//         else if (i === 1) {
//             fib.push(1)
//         }
//         else {
//             fib.push(fib[i - 2] + fib[i - 1])
//         }
//     }

//     return fib
// }


// console.log(fibinociKey(10))

// let isfunctionCalled

// function debouncing(funct) {

//     if (isfunctionCalled) {
//         clearTimeout(isfunctionCalled)
//     }

//     isfunctionCalled = setTimeout(() => {
//         console.log(funct)
//     }, [1000])
// }

// function fu(d) {
//     return d
// }

// debouncing(fu(10))



// function sorting(array, key) {
//     return array.sort((a, b) => {
//         return a[key] - b[key]
//     })
// }

// let a = [{ a: 1, b: 'a' }, { a: 2, b: 'c' }, { a: 1, b: 'b' }, { a: 2, b: 'a' }]

// console.log(sorting(a, 'b'))


function factorial(n) {
    if (n <= 1) return 1

    return n * factorial(n - 1)
}

console.log(factorial(5))
