export const setCellValue = (data, squareId, newValue) => {
  const newValueNum = parseInt(newValue)

  if (isNaN(newValueNum) || newValueNum < 0 || newValueNum > 9) {
    return data
  }

  return {
    ...data,
    [squareId]: newValueNum,
  }
}