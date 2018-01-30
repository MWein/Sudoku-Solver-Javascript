import { combineReducers } from 'redux'


const createStartingData = () => {
  const createStartingDataHelper = (row, col, acc) => {
    const newAcc = {
      ...acc,
      [`${row}-${col}`]: 0,
    }

    if (col < 9 && row <= 9) {
      return createStartingDataHelper(row, col + 1, newAcc)
    } else if (col >= 9 && row < 9) {
      return createStartingDataHelper(row + 1, 1, newAcc)
    }

    return newAcc
  }

  return createStartingDataHelper(1, 1, {})
}
const startingData = createStartingData()


const data = (state = startingData, action = {}) => {
  switch (action.type) {
    default: return state
  }
}

const reducer = combineReducers({
  data,
})

export default reducer
