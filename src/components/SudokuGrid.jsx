import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import SudokuSquareGroup from './SudokuSquareGroup'
import { connect } from 'react-redux'


const calcStartingRow = group => {
  if (group >= 0 && group <= 2) {
    return 1
  } else if (group >= 3 && group <= 5) {
    return 2
  } else if (group >= 6 && group <= 8) {
    return 3
  }

  return 0
}

const calcStartingColumn = group => {
  if (group === 0 || group === 3 || group === 6) {
    return 1
  } else if (group === 1 || group === 4 || group === 7) {
    return 4
  } else if (group === 2 || group === 5 || group === 8) {
    return 7
  }

  return 0
}


const SudokuGrid = ({
  group,
}) => {
  const styles = {
    paper: {
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingRight: '10px',
      paddingLeft: '10px',
    },
  }


  const startingRow = calcStartingRow(group)
  const startingColumn = calcStartingColumn(group)


  const createRow = (row, startingColumn) => {
    const gridWrappedSquare = column => {
      return (
        <Grid item xs={4}>
          <SudokuSquareGroup
            squareId={`${row}-${column}`}
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
      {createRow(startingRow, startingColumn)}
      {createRow(startingRow + 1, startingColumn)}
      {createRow(startingRow + 2, startingColumn)}
    </div>
  )
}


SudokuGrid.propTypes = {
  group: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(SudokuGrid)
