import { calculateList } from "../app/fizzBuzz"
import { oneToHundred } from "../app/utils/hundredList"
import { expectedResult } from "../app/utils/expectedResults"

describe('Fizz Buzz test suite', () => {

    it('should return Fizz if the number is divisble by 3', async () => {

        const divisibleByThree = [1, 3, 4, 6, 7,9]
        divisibleByThree.push(1,3,4,6,7,9)
       

        const expectedResultThree = [
            1,
            'Fizz',
            4,
            'Fizz',
            7,
            'Fizz'
        ]

        const resultByThree = await calculateList(divisibleByThree)
        console.log(divisibleByThree)
        console.log(resultByThree)
        expect(resultByThree).toEqual(expectedResultThree)
    })

    it('should return correct result according to conditions met', async () => {


        const result = await calculateList(oneToHundred)
 
         expect(result).toEqual(expectedResult)
     })
    // it ('should return FizzBuzz if number is divisble by 3 and 5', () => {

    //     const expectedResult = [
    //         1,
    //         2,
    //         3,
    //         4,
    //         5,
    //         6,
    //         10,
    //         'FizzBuzz', 
    //         16,
    //         'FizzBuzz'
    //     ]

    //     const result = calculateList(numbersList)
    //     expect(result).toEqual(expectedResult)
    // })

})

