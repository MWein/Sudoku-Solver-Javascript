import { calcStartingRow, calcStartingColumn } from '../../src/components/SudokuSquareGroup'

describe('Calculate starting row and starting column for Sudoku Square Group', () => {
  
  it('Calculate starting row and column for group 0', () => {
    const actualRow = calcStartingRow(0)
    const expectedRow = 1

    const actualCol = calcStartingColumn(0)
    const expectedCol = 1

    expect(actualRow).toEqual(expectedRow)
    expect(actualCol).toEqual(expectedCol)
  })

  it('Calculate starting row and column for group 1', () => {
    const actualRow = calcStartingRow(1)
    const expectedRow = 1

    const actualCol = calcStartingColumn(1)
    const expectedCol = 4

    expect(actualRow).toEqual(expectedRow)
    expect(actualCol).toEqual(expectedCol)
  })

  it('Calculate starting row and column for group 2', () => {
    const actualRow = calcStartingRow(2)
    const expectedRow = 1

    const actualCol = calcStartingColumn(2)
    const expectedCol = 7

    expect(actualRow).toEqual(expectedRow)
    expect(actualCol).toEqual(expectedCol)
  })

  it('Calculate starting row and column for group 3', () => {
    const actualRow = calcStartingRow(3)
    const expectedRow = 4

    const actualCol = calcStartingColumn(3)
    const expectedCol = 1

    expect(actualRow).toEqual(expectedRow)
    expect(actualCol).toEqual(expectedCol)
  })

  it('Calculate starting row and column for group 4', () => {
    const actualRow = calcStartingRow(4)
    const expectedRow = 4

    const actualCol = calcStartingColumn(4)
    const expectedCol = 4

    expect(actualRow).toEqual(expectedRow)
    expect(actualCol).toEqual(expectedCol)
  })

  it('Calculate starting row and column for group 5', () => {
    const actualRow = calcStartingRow(5)
    const expectedRow = 4

    const actualCol = calcStartingColumn(5)
    const expectedCol = 7

    expect(actualRow).toEqual(expectedRow)
    expect(actualCol).toEqual(expectedCol)
  })

  it('Calculate starting row and column for group 6', () => {
    const actualRow = calcStartingRow(6)
    const expectedRow = 7

    const actualCol = calcStartingColumn(6)
    const expectedCol = 1

    expect(actualRow).toEqual(expectedRow)
    expect(actualCol).toEqual(expectedCol)
  })

  it('Calculate starting row and column for group 7', () => {
    const actualRow = calcStartingRow(7)
    const expectedRow = 7

    const actualCol = calcStartingColumn(7)
    const expectedCol = 4

    expect(actualRow).toEqual(expectedRow)
    expect(actualCol).toEqual(expectedCol)
  })

  it('Calculate starting row and column for group 8', () => {
    const actualRow = calcStartingRow(8)
    const expectedRow = 7

    const actualCol = calcStartingColumn(8)
    const expectedCol = 7

    expect(actualRow).toEqual(expectedRow)
    expect(actualCol).toEqual(expectedCol)
  })

})
