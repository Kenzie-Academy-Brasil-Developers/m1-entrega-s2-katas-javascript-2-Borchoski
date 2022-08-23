
function soma(a,b){
    return a + b;
}
//console.log(soma(1,2))

function multiply(a,b){
    let result = 0
    for(let i = 1; i <= b; i++){
        result = soma(result, a)
    }
    return result
}
//console.log(multiply(2,5))

function power(a,b){
    let result = 1
    for(let i = 0; i < b; i++){
        result = multiply(result, a)
    }
    return result
}
//console.log(power(2,10))

function fatorial(a){
    let result = 0
    for(let i =a; i > 1; i--){
        if(result == 0){
            let primeiroFatorial = multiply(a, i - 1)
            result = soma(primeiroFatorial, result)
        }else{
            result = multiply(result, i - 1)
        }
    }
    return result
}
//console.log(fatorial(6))



// function fatorial(a){
//     let result = 0
//     for(let i =1; i < a; i++){
//         if(i == 1){
//             let primeiroFatorial = multiply(a, i)
//             result = soma(primeiroFatorial, result)
//         }else{
//             result = multiply(result, i)
//         }
//     }
//     console.log(result)
// }

