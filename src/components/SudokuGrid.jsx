import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import SudokuSquareGroup from './SudokuSquareGroup'
import { connect } from 'react-redux'


const SudokuGrid = () => {
  const createRow = startingGroupId => {
    const gridWrappedSquare = group => (
      <Grid item xs={4}>
        <SudokuSquareGroup
          group={group}
        />
      </Grid>
    )

    return (
      <Grid container justify='center' spacing={8}>
        {gridWrappedSquare(startingGroupId)}
        {gridWrappedSquare(startingGroupId + 1)}
        {gridWrappedSquare(startingGroupId + 2)}
      </Grid>
    )
  }

  return (
    <div>
      {createRow(0)}
      {createRow(3)}
      {createRow(6)}
    </div>
  )
}


SudokuGrid.propTypes = {
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(SudokuGrid)
