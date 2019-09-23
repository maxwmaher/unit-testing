let leapyear = require('./leapyear.js')

describe('leap year tests', () => {
    test('take in 2020', () => {
        expect(leapyear(2020)).toBe(true)
    })
    test('take in 2019', () => {
        expect(leapyear(2019)).toBe(false)
    })
    test('take in 2000', () => {
        expect(leapyear(2000)).toBe(true)
    })
    test('take in 1900', () => {
        expect(leapyear(1900)).toBe(false)
    })
})