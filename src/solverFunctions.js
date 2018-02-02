import { cellsSharingBox, cellsSharingCol, cellsSharingRow } from './neighborCells'
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
export const checkForConflicts = data =>
  global.store.dispatch(solverActions.setConflictCells(checkForConflictsHelper(data)))
