export const changeCellInData = (data, squareId, oldValue, newValue) => {
  const valueNum = newValue === '' ? 0 : parseInt(newValue)

  if (isNaN(valueNum)) {
    return data
  }
  const inRangeValue = newValue < 0 || newValue > 9 ? oldValue : valueNum

  return {
    ...data,
    [squareId]: inRangeValue,
  }
}
