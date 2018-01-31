import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import { changeCellInData } from '../solverFunctions'
import { connect } from 'react-redux'
import { actions as sDataActions } from '../redux/actions/sDataActions'

const SudokuSquare = ({
  enabled,
  value,
  squareId,
  data,
  setData,
  focusCell,
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

  const calcPaperStyle = () => {
    if (focusCell === squareId) {
      return {
        ...styles.paper,
        backgroundColor: 'blue',
      }
    }

    return styles.paper
  }

  const displayValue = value === '0' ? '' : `${value}`

  return (
    <Paper style={calcPaperStyle()}>
      <input
        disabled={!enabled}
        onChange={input => setData(changeCellInData(data, squareId, input.target.value))}
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
  focusCell: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  squareId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  data: state.sData.data,
  enabled: state.app.enabled,
  focusCell: state.app.focusCell,
})

const actions = {
  ...sDataActions,
}

export default connect(mapStateToProps, actions)(SudokuSquare)
