import { changeCellInDataHelper, updatePencilMarksForCellHelper, isCellSubfocued } from '../../src/solverFunctions'

const initialState = require('../../src/initialSData')
const initialPencilMarks = require('../../src/initialPencilMarks')

describe('changeCellInDataHelper function tests', () => {
  it('Change cell 1-1 to 6', () => {
    const cellId = '1-1'
    const newVal = 6

    const actual = changeCellInDataHelper(initialState, cellId, newVal)
    const expected = {
      ...initialState,
      [cellId]: newVal,
    }

    expect(actual).toEqual(expected)
  })

  it('Change cell 6-7 to 2', () => {
    const cellId = '6-7'
    const newVal = 2

    const actual = changeCellInDataHelper(initialState, cellId, newVal)
    const expected = {
      ...initialState,
      [cellId]: newVal,
    }

    expect(actual).toEqual(expected)
  })

  it('returns 0 value for a NaN value', () => {
    const cellId = '6-7'
    const newVal = 'not a number'

    const actual = changeCellInDataHelper(initialState, cellId, newVal)
    const expected = {
      ...initialState,
      [cellId]: 0,
    }

    expect(actual).toEqual(expected)
  })

  it('returns 0 value for a blank string', () => {
    const cellId = '6-7'
    const newVal = ''

    const actual = changeCellInDataHelper(initialState, cellId, newVal)
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

    const actual = changeCellInDataHelper(mockState, cellId, newVal)
    const expected = {
      ...initialState,
      [cellId]: 8,
    }

    expect(actual).toEqual(expected)
  })

})



describe('updatePencilMarksForCellHelper function tests', () => {

  it('Returns no marks for filled cell', () => {
    const cellId = '5-1'

    const mockData = {
      ...initialState,
      '5-1': 5,
      '5-2': 7,
      '5-4': 8,
    }

    const mockMarks = {
      ...initialPencilMarks,
      '5-1': [1, 2, 3, 4, 5, 6],
    }

    const actual = updatePencilMarksForCellHelper(mockData, mockMarks, cellId)

    const expectedMarks = []

    const expected = {
      ...initialPencilMarks,
      [cellId]: expectedMarks,
    }

    expect(actual).toEqual(expected)
  })


  it('Returns appropriate Marks for cell 4-5', () => {
    const cellId = '4-5'

    const mockData = {
      ...initialState,
      '2-5': 5,
      '4-1': 1,
      '4-3': 3,
      '6-5': 7,
      '8-5': 9,
      '4-8': 4,
    }

    const actual = updatePencilMarksForCellHelper(mockData, initialPencilMarks, cellId)

    const expectedMarks = [2, 6, 8]

    const expected = {
      ...initialPencilMarks,
      [cellId]: expectedMarks,
    }

    expect(actual).toEqual(expected)
  })


  it('Returns appropriate Marks for cell 1-5', () => {
    const cellId = '1-5'

    const mockData = {
      ...initialState,
      '1-1': 1,
      '1-2': 2,
      '1-3': 3,
      '1-4': 4,
      '1-6': 6,
      '1-7': 7,
      '1-8': 8,
      '1-9': 9,
    }

    const actual = updatePencilMarksForCellHelper(mockData, initialPencilMarks, cellId)

    const expectedMarks = [5]

    const expected = {
      ...initialPencilMarks,
      [cellId]: expectedMarks,
    }

    expect(actual).toEqual(expected)
  })

  it('Returns appropriate Marks for cell 5-4', () => {
    const cellId = '5-4'

    const mockData = {
      ...initialState,
      '4-4': 1,
      '6-4': 7,
      '4-5': 2,
      '5-5': 5,
      '6-5': 8,
      '4-6': 3,
      '5-6': 6,
      '5-2': 4,
    }

    const actual = updatePencilMarksForCellHelper(mockData, initialPencilMarks, cellId)

    const expectedMarks = [9]

    const expected = {
      ...initialPencilMarks,
      [cellId]: expectedMarks,
    }

    expect(actual).toEqual(expected)
  })

})
