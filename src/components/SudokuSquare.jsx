import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import { changeCellInData } from '../dataManipulation'
import { connect } from 'react-redux'
import subfocusedCells from '../redux/selectors/subfocusedCells'

const SudokuSquare = ({
  enabled,
  value,
  squareId,
  data,
  focusCell,
  pencilMarks,
  subfocusedCellsArr,
}) => {
  const styles = {
    paper: {
      height: '60px',
      width: '60px',
      paddingTop: '4px',
      paddingBottom: '10px',
      paddingLeft: '4px',
      paddingRight: '9px',
    },
    textfield: {
      height: '100%',
      width: '100%',
      textAlign: 'center',
      fontSize: '20px',
    },
    pencilMarks: {
      textAlign: 'center',
      position: 'absolute',
      fontSize: '14px',
      paddingTop: '3px',
      paddingLeft: '4px',
    },
  }

  const calcPaperStyle = () => {
    if (focusCell === squareId) {
      return {
        ...styles.paper,
        backgroundColor: 'blue',
      }
    } else if (subfocusedCellsArr.includes(squareId)) {
      return {
        ...styles.paper,
        backgroundColor: 'black',
      }
    }

    return styles.paper
  }

  const displayValue = value === '0' ? '' : `${value}`


  const drawPencilMarks = () => {
    const marks = pencilMarks[squareId]
    const formattedMarks = marks.length > 5 ? `${marks.slice(0, 4).join(' ')}...` : marks.join(' ')

    return (
      <div style={styles.pencilMarks}>
        {formattedMarks}
      </div>
    )
  }


  return (
    <Paper style={calcPaperStyle()}>
      {enabled ? null : drawPencilMarks()}
      <input
        disabled={!enabled}
        onChange={input => changeCellInData(data, squareId, input.target.value)}
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
  pencilMarks: PropTypes.object.isRequired,
  squareId: PropTypes.string.isRequired,
  subfocusedCellsArr: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  data: state.sData.data,
  pencilMarks: state.sData.pencilMarks,
  enabled: state.app.enabled,
  focusCell: state.app.focusCell,
  subfocusedCellsArr: subfocusedCells(state),
})

const actions = {
}

export default connect(mapStateToProps, actions)(SudokuSquare)
