/*function getLastValue(array){
    const lastIndex = array.length - 1;
    return array[lastIndex]
}

console.log(getLastValue([22, 44, 55, 66, 77]))
*/

// function arraySwap(array) {
//     const lastIndex = array[array.length - 1];
//     const firstIndex = array[0];

//     array[0] = lastIndex;
//     array[array.length - 1] = firstIndex;
//     return array
// }

// console.log(arraySwap([11, 22, 33, 44, 55]))

// let array = [1, 2, 3]
// let array2 = []
// for(let i = 0; i < array.length; i++){

//     array2.push(array[i] + 1)

// }

// function addOne(array1, array2){
//     const result = []
//     for(let i = 0; i < array1.length; i++){
//         result.push(array1[i] + array2[i] )

//     }
//     return result
// }

// console.log(addOne([11, 22, 33, 44, 55], [11, 22, 33, 44, 55]))

// function countPositive(array) {
//     let result = 0
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] > 0){
//             result += 1

//         }

//     }
//     return result
// }

// console.log(countPositive([11, -22, -33, 44, 55]))

// function minMax(array){
//     let result = {min: null, max: null}
//     let minNum = Infinity
//     let maxNum = -Infinity

//     for(let i = 0; i < array.length; i++){
//         if(array[i] < minNum ){
//             minNum = array[i]
//             result.min = minNum
//         }

//         if(array[i] > maxNum){
//             maxNum = array[i]
//             result.max = maxNum
//         } 
//     }
//     return result
// }

// console.log(minMax([]))



// function countWords(array) {
//     let result = {}

//     for (let i = 0; i < array.length; i++) {
//         let arrays = array[i];
//         if(!result[arrays]){
//             result[arrays] = 1;
//         } else{
//             result[arrays]++;
//         }
//     }
//     return result
// }


// console.log(countWords(['apple', 'grape', 'apple', 'orange', 'apple', 'grape']))


// let numbers = ['arroz','search', 'feijão', 'batata', 'search']

// for(let i = 0; i < numbers.length; i++){
//     if (numbers[i] === 'search'){
//         console.log(`The index is: ${i}`)
//         break;    
//     } else{
//         console.log(-1)
//     }
// }

// function findIndex(array, word) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === word) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(findIndex(['arroz', 'feijão', 'batata', 'macarrão', pirulito], 'search'))

// function removeEgg(foods) {
//     const reversedFoods = foods.slice().reverse();

//     let newFoods = [];
//     let count = 0;

//     for (let i = 0; i < reversedFoods.length; i++) {
//         if (reversedFoods[i] === 'egg' && count < 2) {
//             count++;
//             continue;
//         } 
//             newFoods.push(reversedFoods[i])

//     }
//     return newFoods.reverse()
// }

// console.log(removeEgg(['arroz', 'egg', 'feijão', 'egg', 'batata', 'macarrão', 'egg', 'pirulito']))


// for(let i = 1; i < 20; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }else if(i % 3 === 0) {
//         console.log("Fizz")
//     }else if(i % 5 === 0){
//         console.log("Buzz")
//     }else {
//         console.log(i)
//     }
// }


function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return i;
        }
    }
    return -1;
}

function unique(array) {
    result = []

    for(let i = 0; i < array.length; i++){
        const word = array[i]

        if(findIndex(result, word) === -1){
            result.push(word)
        }
    }
    return result
}

console.log(unique(['green', 'red', 'blue', 'red']));