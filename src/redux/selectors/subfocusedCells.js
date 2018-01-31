import { cellsSharingBox, cellsSharingCol, cellsSharingRow } from '../../neighborCells'
import { getFocusCell, getFocusType } from './'
import { createSelector } from 'reselect'


const subfocusedCells = createSelector(
  getFocusCell,
  getFocusType,
  (focusCell, focusType) => {
    switch (focusType) {
      case 'row': return cellsSharingRow(focusCell)
      case 'col': return cellsSharingCol(focusCell)
      case 'box': return cellsSharingBox(focusCell)
      default: return []
    }
  }
)

export default subfocusedCells
