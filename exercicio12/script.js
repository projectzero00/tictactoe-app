// let btn = document.querySelector('.change')
// let text = document.querySelector('.text')

// let timeOutId

// btn.addEventListener('click', function () {
//     text.innerHTML = 'Added'
//     clearTimeout(timeOutId)
//     timeOutId = setTimeout(() => {
//         text.innerHTML = ''
//     }, 4000);

// })

// let title = document.querySelector('title')
// let add = document.querySelector('.add')
// let remove = document.querySelector('.remove')
// let messages = 0
// let intervalId
// let playing
// add.addEventListener('click', () => {
//     messages += 1
//     notification()
// })

// remove.addEventListener('click', () => {
//     if (messages > 0) {
//         messages -= 1
//     }
//     if (messages === 0) {
//         stopNotification()
//     }
// })

// function notification() {
//     if (playing) {
//         return
//     }

//     playing = true

//     if (messages !== 0) {
//         intervalId = setInterval(() => {
//             if (document.title === 'App') {
//                 title.text = `(${messages}) messages!`
//             } else {
//                 title.text = 'App'
//             }

//         }, 1000);
//     }
// }

// function stopNotification() {
//     playing = false
//     clearInterval(intervalId)
//     title.text = 'App'

// }

// let multiply = (num1, num2) => num1 * num2

// console.log(multiply(2, 2))

// let positive = 0
// let countPositive = (nums) => {
//     nums.forEach(element => {
//         if (element >= 0) {
//             positive++
//         }
//     });
//     return positive
// }

// console.log(countPositive([2, -3, 5, -2, -5, 1, 6]))
// let newarray = []
// let addNum = (array, num) => {
//     array.map(element =>{
//         newarray.push(element + num)
//     })
//     return newarray
// }

// console.log(addNum([1,2,3], 2))

let removeEgg = (foods) => {
    let filteredFoods = foods.filter((element, index) => {
        if (element === 'egg' && index < 3) {
            return false;
        }
        return true;
    });

    return filteredFoods;
}


console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']))








