import { cellsSharingRow, cellsSharingCol, cellsSharingBox } from './neightborCells'
import { actions as dataActions } from './redux/actions/sDataActions'


// Logic for changeCellInData moved to helper function for testing purposes
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
