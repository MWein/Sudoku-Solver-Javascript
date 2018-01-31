import { constants as appActions } from '../../src/redux/actions/appActions'
import reducer from '../../src/redux/reducers/appReducer'


const initialState = {
  enabled: true,
  focusCell: '',
  focusType: '',
}


describe('App reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to SET_DISABLED', () => {
    const action = {
      type: appActions.SET_DISABLED,
      payload: null,
    }

    const expected = {
      ...initialState,
      enabled: false,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_ENABLED', () => {
    const action = {
      type: appActions.SET_ENABLED,
      payload: null,
    }

    const mockState = {
      ...initialState,
      enabled: false,
    }

    const expected = {
      ...initialState,
      enabled: true,
    }

    const actual = reducer(mockState, action)
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

  it('Responds to SET_FOCUS_TYPE', () => {
    const action = {
      type: appActions.SET_FOCUS_TYPE,
      payload: 'row',
    }

    const expected = {
      ...initialState,
      focusType: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
