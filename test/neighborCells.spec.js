import { cellsSharingBox } from '../src/neightborCells'


describe('Neighbor Cells Functions', () => {
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
