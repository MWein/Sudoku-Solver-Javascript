import { cellsSharingRow, cellsSharingCol, cellsSharingBox } from './neightborCells'
import { actions as dataActions } from './redux/actions/sDataActions'


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
export const changeCellInData = (data, squareId, newValue) => {
  const newData = changeCellInDataHelper(data, squareId, newValue)

  global.store.dispatch(dataActions.setData(newData))
}


export const updatePencilMarksForCellHelper = (data, pencilMarks, squareId) => {
  if (data[squareId] !== 0) {
    return {
      ...pencilMarks,
      [squareId]: [],
    }
  }
  
  const sharedRows = cellsSharingRow(squareId)
  const sharedCols = cellsSharingCol(squareId)
  const sharedBox = cellsSharingBox(squareId)

  // TODO Finish

  return {}
}
export const updatePencilMarksForCell = (data, pencilMarks, squareId) => {
  const newMarks = updatePencilMarksForCellHelper(data, pencilMarks, squareId)

  global.store.dispatch(dataActions.setPencilMarks(newMarks))
}


export const isCellSubfocued = (focusCell, focusType, squareId) => {
  if (focusType === '' || focusCell === squareId) {
    return false
  }

  if (focusType === 'row') {
    const squareRow = squareId.charAt(0)
    const focusRow = focusCell.charAt(0)

    return squareRow === focusRow
  } else if (focusType === 'col') {
    const squareCol = squareId.charAt(2)
    const focusCol = focusCell.charAt(2)

    return squareCol === focusCol
  } else if (focusType === 'box') {
    const squareRow = squareId.charAt(0)
    const focusRow = focusCell.charAt(0)
    const squareCol = squareId.charAt(2)
    const focusCol = focusCell.charAt(2)

    if (Math.abs(squareRow - focusRow) > 2 || Math.abs(squareCol - focusCol) > 2) {
      return false
    }

    const cellsInBox = cellsSharingBox(focusCell)

    return cellsInBox.includes(squareId)
  }

  return false
}
