import { cellsSharingBox, cellsSharingCol, cellsSharingRow } from './neighborCells'
import { actions as appActions } from './redux/actions/appActions'
import lodash from 'lodash'
import objFilter from 'object-filter'
import { actions as solverActions } from './redux/actions/solverEngineActions'

export const checkForConflictsHelper = data => {
  const filledCells = objFilter(data, cellData => cellData !== 0)
  const filledCellKeys = Object.keys(filledCells)

  if (filledCellKeys.length <= 1) {
    return []
  }

  const hasConflict = (cell, checkCells) => {
    const cellValue = filledCells[cell]
    const checkCellValues = checkCells.map(cellId => filledCells[cellId])

    return checkCellValues.includes(cellValue)
  }

  return filledCellKeys.filter(cell =>
    hasConflict(cell, lodash.intersection(cellsSharingRow(cell), filledCellKeys))
      || hasConflict(cell, lodash.intersection(cellsSharingCol(cell), filledCellKeys))
      || hasConflict(cell, lodash.intersection(cellsSharingBox(cell), filledCellKeys)))
}
export const checkForConflicts = () => {
  const data = global.store.getState().sData.data

  global.store.dispatch(solverActions.setConflictCells(checkForConflictsHelper(data)))
}

export const checkSolvedHelper = data => {
  if (checkForConflictsHelper(data).length > 0) {
    return 'Conflicts'
  } else if (Object.values(data).includes(0)) {
    return 'Empty Cells'
  }

  return 'Solved'
}
export const checkSolved = () => {
  const data = global.store.getState().sData.data
  
  global.store.dispatch(appActions.setPuzzleState(checkSolvedHelper(data)))
}
