import { cellsSharingBox, cellsSharingCol, cellsSharingRow } from './neighborCells'
import { actions as dataActions } from './redux/actions/sDataActions'
import lodash from 'lodash'
import { actions as solverActions } from './redux/actions/solverEngineActions'


// Helper functions contain actual logic so that they can be tested


export const changeCellInDataHelper = (data, squareId, newValue) => {
  const valueNum = newValue === '' ? 0 : parseInt(newValue)

  if (isNaN(valueNum)) {
    return data
  }
  const inRangeValue = newValue < 0 || newValue > 9 ? data[squareId] : valueNum

  return {
    ...data,
    [squareId]: inRangeValue,
  }
}
export const changeCellInData = (data, squareId, newValue) =>
  global.store.dispatch(dataActions.setData(changeCellInDataHelper(data, squareId, newValue)))


export const updatePencilMarksForCellHelper = (data, pencilMarks, squareId) => {
  if (data[squareId] !== 0) {
    return {
      ...pencilMarks,
      [squareId]: [],
    }
  }

  const getValuesFromIds = squares =>
    squares.map(cellId => data[cellId])
      .filter(value => value !== 0)

  const combinedUniq = lodash.uniq(lodash.concat(
    getValuesFromIds(cellsSharingRow(squareId)),
    getValuesFromIds(cellsSharingCol(squareId)),
    getValuesFromIds(cellsSharingBox(squareId))
  ))
  const difference = lodash.difference([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], combinedUniq)

  return {
    ...pencilMarks,
    [squareId]: difference,
  }
}
export const updatePencilMarksForCell = (data, pencilMarks, squareId) =>
  global.store.dispatch(dataActions.setPencilMarks(updatePencilMarksForCellHelper(data, pencilMarks, squareId)))


export const addSquareToStackHelper = (stack, squareId) => lodash.uniq([
  ...stack,
  squareId,
])
export const addSquareToStack = (stack, squareId) => {
  global.store.dispatch(solverActions.setStack(addSquareToStackHelper(stack, squareId)))
}


export const popSquareFromStackHelper = stack => ({
  stack: stack.slice(1),
  cell: stack.length === 0 ? '' : stack[0],
})
export const popSquareFromStack = stack => {
  const bundle = popSquareFromStackHelper(stack)

  global.store.dispatch(solverActions.setStack(bundle.stack))

  return bundle.cell
}
