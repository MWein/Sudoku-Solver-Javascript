import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'


const SudokuSquare = ({
  enabled,
  value,
  squareId,
}) => {
  const styles = {
    paper: {
      height: '60px',
      width: '60px',
      paddingTop: '2px',
      paddingBottom: '8px',
      paddingLeft: '2px',
      paddingRight: '6px',
    },
    textfield: {
      height: '100%',
      width: '100%',
      textAlign: 'center',
      fontSize: '20px',
    },
  }

  return (
    <Paper style={styles.paper}>
      <input disabled={!enabled} style={styles.textfield} type='text' value={value} />
    </Paper>
  )
}


SudokuSquare.propTypes = {
  enabled: PropTypes.bool.isRequired,
  squareId: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  enabled: state.app.enabled,
})

const actions = {
}

export default connect(mapStateToProps, actions)(SudokuSquare)
