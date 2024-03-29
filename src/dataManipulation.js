import { cellsSharingBox, cellsSharingCol, cellsSharingRow } from './neighborCells'
import { actions as appActions } from './redux/actions/appActions'
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
export const changeCellInData = (squareId, newValue) => {
  const data = global.store.getState().sData.data

  global.store.dispatch(dataActions.setData(changeCellInDataHelper(data, squareId, newValue)))
}


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
export const updatePencilMarksForCell = squareId => {
  const sDataState = global.store.getState().sData
  const data = sDataState.data
  const pencilMarks = sDataState.pencilMarks

  global.store.dispatch(dataActions.setPencilMarks(updatePencilMarksForCellHelper(data, pencilMarks, squareId)))
}


export const checkForUniqPencilMarksInCellHelper = (pencilMarks, squareId) => {
  const neighborPencilMarks = neighbors => lodash.uniq(neighbors.reduce((acc, cellId) => [
    ...acc,
    ...pencilMarks[cellId],
  ], []))

  const cellPencilMarks = pencilMarks[squareId]

  const rowNeighborPencilMarks = neighborPencilMarks(cellsSharingRow(squareId))
  const uniqPencilMarksRow = cellPencilMarks.filter(mark => !rowNeighborPencilMarks.includes(mark))

  const colNeighborPencilMarks = neighborPencilMarks(cellsSharingCol(squareId))
  const uniqPencilMarksCol = cellPencilMarks.filter(mark => !colNeighborPencilMarks.includes(mark))

  const boxNeighborPencilMarks = neighborPencilMarks(cellsSharingBox(squareId))
  const uniqPencilMarksBox = cellPencilMarks.filter(mark => !boxNeighborPencilMarks.includes(mark))

  if (uniqPencilMarksRow.length === 1) {
    return uniqPencilMarksRow[0]
  } else if (uniqPencilMarksCol.length === 1) {
    return uniqPencilMarksCol[0]
  } else if (uniqPencilMarksBox.length === 1) {
    return uniqPencilMarksBox[0]
  }

  return 0
}
export const checkForUniqPencilMarksInCell = squareId => {
  const pencilMarks = global.store.getState().sData.pencilMarks

  return checkForUniqPencilMarksInCellHelper(pencilMarks, squareId)
}


export const addSquareToStackHelper = (stack, sData, squareId) => {
  if (sData[squareId] !== 0) {
    return stack
  }

  return lodash.uniq([
    ...stack,
    squareId,
  ])
}
export const addSquareToStack = squareId => {
  const state = global.store.getState()
  const stack = state.solver.cellStack
  const data = state.sData.data

  global.store.dispatch(solverActions.setCellStack(addSquareToStackHelper(stack, data, squareId)))
}


export const popSquareFromStackHelper = stack => ({
  stack: stack.slice(1),
  cell: stack.length === 0 ? '' : stack[0],
})
export const popSquareFromStack = () => {
  const stack = global.store.getState().solver.cellStack
  const bundle = popSquareFromStackHelper(stack)

  global.store.dispatch(solverActions.setCellStack(bundle.stack))
  global.store.dispatch(appActions.setFocusCell(bundle.cell))

  return bundle.cell
}
