import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import SudokuSquare from './SudokuSquare'
import { connect } from 'react-redux'


export const calcStartingRow = group => {
  if (group >= 0 && group <= 2) {
    return 1
  } else if (group >= 3 && group <= 5) {
    return 4
  } else if (group >= 6 && group <= 8) {
    return 7
  }

  return 0
}

export const calcStartingColumn = group => {
  if (group === 0 || group === 3 || group === 6) {
    return 1
  } else if (group === 1 || group === 4 || group === 7) {
    return 4
  } else if (group === 2 || group === 5 || group === 8) {
    return 7
  }

  return 0
}


const SudokuSquareGroup = ({
  group,
  data,
}) => {
  const styles = {
    paper: {
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingRight: '10px',
      paddingLeft: '10px',
      backgroundColor: 'gray',
    },
  }


  const startingRow = calcStartingRow(group)
  const startingColumn = calcStartingColumn(group)


  const createRow = (row, startingColumn) => {
    const gridWrappedSquare = column => {

      const currentId = `${row}-${column}`
      const currentValue = `${data[currentId]}`

      return (
        <Grid item xs={4}>
          <SudokuSquare
            squareId={currentId}
            value={currentValue}
          />
        </Grid>
      )
    }

    return (
      <Grid container justify='center' spacing={8}>
        {gridWrappedSquare(startingColumn)}
        {gridWrappedSquare(startingColumn + 1)}
        {gridWrappedSquare(startingColumn + 2)}
      </Grid>
    )
  }

  return (
    <div>
      <Paper style={styles.paper}>
        {createRow(startingRow, startingColumn)}
        {createRow(startingRow + 1, startingColumn)}
        {createRow(startingRow + 2, startingColumn)}
      </Paper>
    </div>
  )
}


SudokuSquareGroup.propTypes = {
  data: PropTypes.object,
  group: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  data: state.inputs.data,
})

const actions = {
}

export default connect(mapStateToProps, actions)(SudokuSquareGroup)
