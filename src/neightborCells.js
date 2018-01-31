export const cellsSharingRow = cell => {
  const row = cell.charAt(0)

  const helper = (cell, row, col, acc) => {
    const newCell = `${row}-${col}`
    
    const newAcc = newCell === cell ? acc :
      [
        ...acc,
        newCell,
      ]

    if (col < 9) {
      return helper(cell, row, col + 1, newAcc)
    }

    return newAcc
  }

  return helper(cell, row, 1, [])
}


export const cellsSharingCol = cell => {
  // TODO Write test
}


export const cellsSharingBox = cell => {
  const row = cell.charAt(0)
  const col = cell.charAt(2)

  const sharedGroup = num => {
    if (num >= 1 && num <= 3) {
      return [ 1, 2, 3 ]
    } else if (num >= 4 && num <= 6) {
      return [ 4, 5, 6 ]
    } else if (num >= 7 && num <= 9) {
      return [ 7, 8, 9 ]
    }

    return []
  }

  const sharedRows = sharedGroup(row)
  const sharedCols = sharedGroup(col)

  const mergeShared = (shared, rowIndex, colIndex, acc) => {
    const newCell = `${shared.sharedRows[rowIndex]}-${shared.sharedCols[colIndex]}`
    const newAcc = newCell === cell ? acc :
      [
        ...acc,
        `${shared.sharedRows[rowIndex]}-${shared.sharedCols[colIndex]}`,
      ]

    if (rowIndex >= 2 && colIndex <= 1) {
      return mergeShared(shared, 0, colIndex + 1, newAcc)
    } else if (rowIndex <= 1 && colIndex <= 2) {
      return mergeShared(shared, rowIndex + 1, colIndex, newAcc)
    }

    return newAcc
  }

  return mergeShared({ sharedRows, sharedCols }, 0, 0, [])
}
