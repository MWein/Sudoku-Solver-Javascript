import { cellsSharingRow, cellsSharingCol, cellsSharingBox } from '../../src/neighborCells'


describe('Neighbor Cells Functions', () => {

  it('Returns cells sharing the row of 2-4', () => {
    const cellId = '2-4'
    const actual = cellsSharingRow(cellId)
    const expected = [
      '2-1',
      '2-2',
      '2-3',
      '2-5',
      '2-6',
      '2-7',
      '2-8',
      '2-9',
    ]

    expect(actual).toEqual(expected)
  })

  it('Returns cells sharing the row of 8-4', () => {
    const cellId = '8-4'
    const actual = cellsSharingRow(cellId)
    const expected = [
      '8-1',
      '8-2',
      '8-3',
      '8-5',
      '8-6',
      '8-7',
      '8-8',
      '8-9',
    ]

    expect(actual).toEqual(expected)
  })

  it('Returns cells sharing the row of 7-2', () => {
    const cellId = '7-2'
    const actual = cellsSharingRow(cellId)
    const expected = [
      '7-1',
      '7-3',
      '7-4',
      '7-5',
      '7-6',
      '7-7',
      '7-8',
      '7-9',
    ]

    expect(actual).toEqual(expected)
  })


  it('Returns cells sharing the col of 7-2', () => {
    const cellId = '7-2'
    const actual = cellsSharingCol(cellId)
    const expected = [
      '1-2',
      '2-2',
      '3-2',
      '4-2',
      '5-2',
      '6-2',
      '8-2',
      '9-2',
    ]

    expect(actual).toEqual(expected)
  })

  it('Returns cells sharing the col of 7-8', () => {
    const cellId = '7-8'
    const actual = cellsSharingCol(cellId)
    const expected = [
      '1-8',
      '2-8',
      '3-8',
      '4-8',
      '5-8',
      '6-8',
      '8-8',
      '9-8',
    ]

    expect(actual).toEqual(expected)
  })

  it('Returns cells sharing the col of 2-9', () => {
    const cellId = '2-9'
    const actual = cellsSharingCol(cellId)
    const expected = [
      '1-9',
      '3-9',
      '4-9',
      '5-9',
      '6-9',
      '7-9',
      '8-9',
      '9-9',
    ]

    expect(actual).toEqual(expected)
  })



  it('Returns cells sharing the box of the input cell for 1-2', () => {
    const cellId = '1-2'
    const actual = cellsSharingBox(cellId)
    const expected = [
      '1-1',
      '2-1',
      '3-1',
      '2-2',
      '3-2',
      '1-3',
      '2-3',
      '3-3',
    ]

    expect(actual).toEqual(expected)
  })

  it('Returns cells sharing the box of the input cell for 8-4', () => {
    const cellId = '8-4'
    const actual = cellsSharingBox(cellId)
    const expected = [
      '7-4',
      '9-4',
      '7-5',
      '8-5',
      '9-5',
      '7-6',
      '8-6',
      '9-6',
    ]

    expect(actual).toEqual(expected)
  })

  it('Returns cells sharing the box of the input cell for 5-7', () => {
    const cellId = '5-7'
    const actual = cellsSharingBox(cellId)
    const expected = [
      '4-7',
      '6-7',
      '4-8',
      '5-8',
      '6-8',
      '4-9',
      '5-9',
      '6-9',
    ]

    expect(actual).toEqual(expected)
  })
})
