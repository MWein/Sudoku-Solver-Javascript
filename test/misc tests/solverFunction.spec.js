import {
  checkForConflictsHelper,
  checkSolvedHelper,
} from '../../src/solverFunctions'


const initialSData = require('../../src/initialSData')


describe('checkForConflictsHelper function tests', () => {
  it('Returns no errors for empty data set', () => {
    const actual = checkForConflictsHelper(initialSData)
    const expected = []

    expect(actual).toEqual(expected)
  })

  it('Returns an array with cell ids that share the same number in the same row', () => {
    const sharedCells = {
      '1-5': 2,
      '1-8': 2,
    }
    const mockData = {
      ...initialSData,
      ...sharedCells,
    }

    const actual = checkForConflictsHelper(mockData)
    const expected = Object.keys(sharedCells)

    expect(actual).toEqual(expected)
  })


  it('Returns an array with cell ids that share the same number in the same column', () => {
    const sharedCells = {
      '1-5': 2,
      '8-5': 2,
    }
    const mockData = {
      ...initialSData,
      ...sharedCells,
    }

    const actual = checkForConflictsHelper(mockData)
    const expected = Object.keys(sharedCells)

    expect(actual).toEqual(expected)
  })


  it('Returns an array with cell ids that share the same number in the same box', () => {
    const sharedCells = {
      '4-4': 2,
      '5-6': 2,
    }
    const mockData = {
      ...initialSData,
      ...sharedCells,
    }

    const actual = checkForConflictsHelper(mockData)
    const expected = Object.keys(sharedCells)

    expect(actual).toEqual(expected)
  })


  it('Returns an array with cell ids that share the same number in the same box and the same row', () => {
    const sharedCells = {
      '4-2': 2,
      '4-4': 2,
      '5-6': 2,
    }
    const mockData = {
      ...initialSData,
      ...sharedCells,
    }

    const actual = checkForConflictsHelper(mockData)
    const expected = Object.keys(sharedCells)

    expect(actual).toEqual(expected)
  })


  it('Returns an empty array if there are values but no conflicts', () => {
    const sharedCells = {
      '4-2': 1,
      '4-4': 2,
      '5-6': 3,
    }
    const mockData = {
      ...initialSData,
      ...sharedCells,
    }

    const actual = checkForConflictsHelper(mockData)
    const expected = []

    expect(actual).toEqual(expected)
  })

  it('Just for fun, returns an array of the entire data set keys if every single box has the same value', () => {
    const keys = Object.keys(initialSData)
    
    const mockData = keys.reduce((acc, cellId) => {
      return {
        ...acc,
        [cellId]: 5,
      }
    }, {})

    const actual = checkForConflictsHelper(mockData)
    const expected = keys

    expect(actual).toEqual(expected)
  })
})


describe('checkSolvedHelper function tests', () => {

  it('Returns "Empty Cells" if given data that doesnt conflict but has empty cells', () => {
    const mockData = {
      ...initialSData,
      '1-5': 5,
      '1-7': 3,
      '1-8': 4,
    }

    const actual = checkSolvedHelper(mockData)
    const expected = 'Empty Cells'

    expect(actual).toEqual(expected)
  })

  it('Returns "Conflicts" if given data that conflicts and has empty cells', () => {
    const mockData = {
      ...initialSData,
      '1-5': 5,
      '1-7': 5,
      '1-8': 4,
    }

    const actual = checkSolvedHelper(mockData)
    const expected = 'Conflicts'

    expect(actual).toEqual(expected)
  })

  it('Returns false and "Conflicts" if given data that conflicts but all cells are filled', () => {
    const mockData = Object.keys(initialSData).reduce((acc, cellId) => {
      return {
        ...acc,
        [cellId]: 7,
      }
    }, {})

    const actual = checkSolvedHelper(mockData)
    const expected = 'Conflicts'

    expect(actual).toEqual(expected)
  })

  it('Returns true if data is complete and no conflicts are found', () => {
    const mockData = {
      '1-1': 3, '1-2': 9, '1-3': 1, '1-4': 2, '1-5': 8, '1-6': 6, '1-7': 5, '1-8': 7, '1-9': 4,
      '2-1': 4, '2-2': 8, '2-3': 7, '2-4': 3, '2-5': 5, '2-6': 9, '2-7': 1, '2-8': 2, '2-9': 6,
      '3-1': 6, '3-2': 5, '3-3': 2, '3-4': 7, '3-5': 1, '3-6': 4, '3-7': 8, '3-8': 3, '3-9': 9,
      '4-1': 8, '4-2': 7, '4-3': 5, '4-4': 4, '4-5': 3, '4-6': 1, '4-7': 6, '4-8': 9, '4-9': 2,
      '5-1': 2, '5-2': 1, '5-3': 3, '5-4': 9, '5-5': 6, '5-6': 7, '5-7': 4, '5-8': 8, '5-9': 5,
      '6-1': 9, '6-2': 6, '6-3': 4, '6-4': 5, '6-5': 2, '6-6': 8, '6-7': 7, '6-8': 1, '6-9': 3,
      '7-1': 1, '7-2': 4, '7-3': 9, '7-4': 6, '7-5': 7, '7-6': 3, '7-7': 2, '7-8': 5, '7-9': 8,
      '8-1': 5, '8-2': 3, '8-3': 8, '8-4': 1, '8-5': 4, '8-6': 2, '8-7': 9, '8-8': 6, '8-9': 7,
      '9-1': 7, '9-2': 2, '9-3': 6, '9-4': 8, '9-5': 9, '9-6': 5, '9-7': 3, '9-8': 4, '9-9': 1,
    }

    const actual = checkSolvedHelper(mockData)
    const expected = 'Solved'

    expect(actual).toEqual(expected)
  })

})
