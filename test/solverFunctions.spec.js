import { changeCellInDataHelper, isCellSubfocued } from '../src/solverFunctions'


const initialState = require('../src/initialSData')


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

  it('returns 0 value for a blank screen', () => {
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


describe('isCellSubfocued function tests', () => {
  it('Returns false if focusType is empty string', () => {
    const focusCell = '1-7'
    const focusType = ''
    const querySquare = '3-7'

    const actual = isCellSubfocued(focusCell, focusType, querySquare)
    const expected = false

    expect(actual).toEqual(expected)
  })


  it('Returns false if focusCell and queryCell are the same', () => {
    const focusCell = '1-7'
    const focusType = ''
    const querySquare = '1-7'

    const actual = isCellSubfocued(focusCell, focusType, querySquare)
    const expected = false

    expect(actual).toEqual(expected)
  })


  it('Returns false if focusType is row and cell is not in focusCell row', () => {
    const focusCell = '1-7'
    const focusType = 'row'
    const querySquare = '3-7'

    const actual = isCellSubfocued(focusCell, focusType, querySquare)
    const expected = false

    expect(actual).toEqual(expected)
  })
  it('Returns true if focusType is row and cell is in focusCell row', () => {
    const focusCell = '3-9'
    const focusType = 'row'
    const querySquare = '3-7'

    const actual = isCellSubfocued(focusCell, focusType, querySquare)
    const expected = true

    expect(actual).toEqual(expected)
  })


  it('Returns false if focusType is column and cell is not in focusCell column', () => {
    const focusCell = '1-4'
    const focusType = 'col'
    const querySquare = '3-7'

    const actual = isCellSubfocued(focusCell, focusType, querySquare)
    const expected = false

    expect(actual).toEqual(expected)
  })
  it('Returns true if focusType is column and cell is in focusCell column', () => {
    const focusCell = '1-7'
    const focusType = 'col'
    const querySquare = '3-7'

    const actual = isCellSubfocued(focusCell, focusType, querySquare)
    const expected = true

    expect(actual).toEqual(expected)
  })



  it('Returns false if focusType is box and cell is not in focusCell box', () => {
    const focusCell = '1-4'
    const focusType = 'box'
    const querySquare = '3-7'

    const actual = isCellSubfocued(focusCell, focusType, querySquare)
    const expected = false

    expect(actual).toEqual(expected)
  })
  it('Returns true if focusType is box and cell is in focusCell box', () => {
    const focusCell = '4-7'
    const focusType = 'box'
    const querySquare = '6-8'

    const actual = isCellSubfocued(focusCell, focusType, querySquare)
    const expected = true

    expect(actual).toEqual(expected)
  })

})