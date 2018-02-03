import { constants as appActions } from '../../src/redux/actions/appActions'
import reducer from '../../src/redux/reducers/appReducer'


const initialState = {
  enabled: true,
  puzzleState: 'Empty Cells',
  focusCell: '',
}


describe('App reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to SET_ENABLED', () => {
    const action = {
      type: appActions.SET_ENABLED,
      payload: true,
    }

    const mockState = {
      ...initialState,
      enabled: false,
    }

    const expected = {
      ...initialState,
      enabled: action.payload,
    }

    const actual = reducer(mockState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_PUZZLE_STATE', () => {
    const action = {
      type: appActions.SET_PUZZLE_STATE,
      payload: 'Solved',
    }

    const actual = reducer(initialState, action)
    const expected = {
      ...initialState,
      puzzleState: action.payload
    }

    expect(actual).toEqual(expected)
  })

  it('Responds to SET_FOCUS_CELL', () => {
    const action = {
      type: appActions.SET_FOCUS_CELL,
      payload: '1-4',
    }

    const expected = {
      ...initialState,
      focusCell: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

})
