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
    console.log('Unfinished test')
  })

  it('Same as previous test but with different data', () => {
    console.log('Unfinished test')
  })

})
