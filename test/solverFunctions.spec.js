import { changeCellInData } from '../src/solverFunctions'


const initialState = require('../src/initialSData')


describe('changeCellInData function tests', () => {
  it('Change cell 1-1 to 6', () => {
    const cellId = '1-1'
    const newVal = 6

    const actual = changeCellInData(initialState, cellId, newVal)
    const expected = {
      ...initialState,
      [cellId]: newVal,
    }

    expect(actual).toEqual(expected)
  })

  it('Change cell 6-7 to 2', () => {
    const cellId = '6-7'
    const newVal = 2

    const actual = changeCellInData(initialState, cellId, newVal)
    const expected = {
      ...initialState,
      [cellId]: newVal,
    }

    expect(actual).toEqual(expected)
  })

  it('returns 0 value for a NaN value', () => {
    const cellId = '6-7'
    const newVal = 'not a number'

    const actual = changeCellInData(initialState, cellId, newVal)
    const expected = {
      ...initialState,
      [cellId]: 0,
    }

    expect(actual).toEqual(expected)
  })

  it('returns 0 value for a blank screen', () => {
    const cellId = '6-7'
    const newVal = ''

    const actual = changeCellInData(initialState, cellId, newVal)
    const expected = {
      ...initialState,
      [cellId]: 0,
    }

    expect(actual).toEqual(expected)
  })

  it('returns previous value for a number larger than 9', () => {
    const cellId = '6-7'
    const newVal = 89

    const mockState = {
      ...initialState,
      [cellId]: 8,
    }

    const actual = changeCellInData(mockState, cellId, newVal)
    const expected = {
      ...initialState,
      [cellId]: 8,
    }

    expect(actual).toEqual(expected)
  })

})