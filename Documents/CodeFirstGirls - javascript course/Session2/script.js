
// const genre = 'horror'
// const rating = 5
// const pillows = 1

// if(rating === 5 && genre === 'horror' && pillows >= 1) {
//     console.log('Your friend will watch')
// } else if (rating === 5 && genre === 'horror' && pillows <1) {
//     console.log('Your friend won\'t watch it')
// } else console.log('No point watching it')


// const students = ['Sofia', 'Elizabeth', 'Sasha', 'Samantha', 
// 'Abigail', 'Lorena', 'Ayesha', 'Adeyo', 'Emil', 'Ernest', 'Antonio']

// for (i = 0; i < students.length; i++) {
//     console.log(`${students[i]} ${i}`)
// }

// let classSize = 0
// const maxClassSize = 7
// const classList = []

// while(classSize < maxClassSize) {
//     classList.push(students[Math.floor(Math.random()*students.length)])
//     classSize++
//     }
//     const uniqueList = [...new Set(classList)]
//     console.log(uniqueList)

// const addTwoNumbers = (x, y) => {
//     const sum = (x + y)
//     console.log(sum)
//     return sum
// }

// addTwoNumbers(2, 2)
// addTwoNumbers(9, 3)
// addTwoNumbers(2938, 2)

let userInput

do {
    userInput = prompt("Please enter a word")
    console.log(userInput)

} while (userInput !== 'stop')