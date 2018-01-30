export const setCellValue = (data, squareId, newValue) => {
  const valueNum = newValue === '' ? 0 : parseInt(newValue)

  if (isNaN(valueNum)) {
    return data
  }

  return {
    ...data,
    [squareId]: valueNum,
  }
}