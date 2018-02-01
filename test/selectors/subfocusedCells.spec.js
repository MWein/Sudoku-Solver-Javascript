import subfocusedCells from '../../src/redux/selectors/subfocusedCells'

describe('subfocusedCells function tests', () => {
  it('Returns empty array if focusType is empty string', () => {
    const mockState = {
      app: {
        focusCell: '1-1',
        focusType: '',
      }
    }

    const actual = subfocusedCells(mockState)
    const expected = []
    
    expect(actual).toEqual(expected)
  })

  it('Returns focused cells for row of 5-2', () => {
    const mockState = {
      app: {
        focusCell: '5-2',
        focusType: 'row',
      }
    }

    const actual = subfocusedCells(mockState)
    const expected = [
      '5-1',
      '5-3',
      '5-4',
      '5-5',
      '5-6',
      '5-7',
      '5-8',
      '5-9',
    ]
    
    expect(actual).toEqual(expected)
  })

  it('Returns focused cells for col of 7-3', () => {
    const mockState = {
      app: {
        focusCell: '7-3',
        focusType: 'col',
      }
    }

    const actual = subfocusedCells(mockState)
    const expected = [
      '1-3',
      '2-3',
      '3-3',
      '4-3',
      '5-3',
      '6-3',
      '8-3',
      '9-3',
    ]
    
    expect(actual).toEqual(expected)
  })


  it('Returns focused cells for box of 1-3', () => {
    const mockState = {
      app: {
        focusCell: '1-3',
        focusType: 'box',
      }
    }

    const actual = subfocusedCells(mockState)
    const expected = [
      '1-1',
      '2-1',
      '3-1',
      '1-2',
      '2-2',
      '3-2',
      '2-3',
      '3-3',
    ]
    
    expect(actual).toEqual(expected)
  })
})