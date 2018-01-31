import { constants as dataActions } from '../../src/redux/actions/sDataActions'
import reducer from '../../src/redux/reducers/sDataReducer'

const defaultData = require('../../src/initialSData')

const initialState = {
  data: defaultData,
}


describe('Input data reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to SET_DATA', () => {
    const action = {
      type: dataActions.SET_DATA,
      payload: {
        ...initialState.data,
        '1-4': 7,
      },
    }

    const expected = {
      ...initialState,
      data: action.payload,
    }

    const actual = reducer(initialState, action)

    expect(actual).toEqual(expected)
  })
})
