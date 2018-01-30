import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { actions as inputDataActions } from '../redux/actions/inputDataActions'
import { setCellValue } from '../solverFunctions'

const SudokuSquare = ({
  enabled,
  value,
  squareId,
  data,
  setData,
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

  const displayValue = value === '0' ? '' : `${value}`

  return (
    <Paper style={styles.paper}>
      <input
        disabled={!enabled}
        onChange={input => setData(setCellValue(data, squareId, value, input.target.value))}
        style={styles.textfield}
        type='text'
        value={displayValue}
      />
    </Paper>
  )
}


SudokuSquare.propTypes = {
  data: PropTypes.object.isRequired,
  enabled: PropTypes.bool.isRequired,
  setData: PropTypes.func.isRequired,
  squareId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  data: state.inputs.data,
  enabled: state.app.enabled,
})

const actions = {
  ...inputDataActions,
}

export default connect(mapStateToProps, actions)(SudokuSquare)
