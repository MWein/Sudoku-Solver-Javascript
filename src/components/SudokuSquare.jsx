import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'


const SudokuSquare = ({
  squareId,
}) => {
  const styles = {
    paper: {
      height: '60px',
      width: '60px',
    },
  }

  return (
    <Paper style={styles.paper}>
      {squareId}
    </Paper>
  )
}


SudokuSquare.propTypes = {
  squareId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(SudokuSquare)
