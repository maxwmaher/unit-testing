let fizzbuzz = require('./fizzbuzz.js')

describe('fizzbuzz tests', () => {
    test('take in 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz')
    })
    test('take in 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz')
    })
    test('take in 15', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz')
    })
    test('take in 14', () => {
        expect(fizzbuzz(14)).toBe(14)
    })
})