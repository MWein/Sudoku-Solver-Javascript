import { constants as solverActions } from '../../src/redux/actions/solverEngineActions'
import reducer from '../../src/redux/reducers/solverEngineReducer'


const initialState = {
  cellStack: [],
  initialPassComplete: false,
  repeat: false,
  conflictCells: [],
}


describe('Solver engine reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to SET_CELL_STACK', () => {
    const action = {
      type: solverActions.SET_CELL_STACK,
      payload: [1, 2, 3],
    }

    const expected = {
      ...initialState,
      cellStack: action.payload,
    }

    const actual = reducer(initialState, action)

    expect(actual).toEqual(expected)
  })


  it('Responds to SET_REPEAT', () => {
    const action = {
      type: solverActions.SET_REPEAT,
      payload: true,
    }

    const expected = {
      ...initialState,
      repeat: action.payload,
    }

    const actual = reducer(initialState, action)

    expect(actual).toEqual(expected)
  })

  it('Responds to SET_CONFLICT_CELLS', () => {
    const action = {
      type: solverActions.SET_CONFLICT_CELLS,
      payload: ['1-1', '1-2'],
    }

    const expected = {
      ...initialState,
      conflictCells: action.payload,
    }

    const actual = reducer(initialState, action)

    expect(actual).toEqual(expected)
  })


  it('Responds to SET_INITIAL_PASS_COMPLETE', () => {
    const action = {
      type: solverActions.SET_INITIAL_PASS_COMPLETE,
      payload: true,
    }

    const expected = {
      ...initialState,
      initialPassComplete: action.payload,
    }

    const actual = reducer(initialState, action)

    expect(actual).toEqual(expected)
  })
})
