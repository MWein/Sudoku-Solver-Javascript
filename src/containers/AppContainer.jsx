import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import SudokuGrid from '../components/SudokuGrid'
import TextField from 'material-ui/TextField'
import { actions as appActions } from '../redux/actions/appActions'
import { connect } from 'react-redux'

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const AppContainer = ({
  enabled,
  setEnabled,
  setDisabled,
  focusCell,
  focusType,
  setFocusCell,
  setFocusType,
}) => (
  <div>

    <div style={divStyle}>
      <Button
        onClick={enabled ? () => setDisabled() : () => setEnabled()}
      >
        {enabled ? 'Start' : 'Stop'}
      </Button>

      <Button
        disabled={!enabled}
      >
        Step
      </Button>


      <TextField
        onChange={input => setFocusCell(input.target.value)}
        style={{ width: '50px' }}
        value={focusCell}
      />
      <TextField
        onChange={input => setFocusType(input.target.value)}
        style={{ width: '50px' }}
        value={focusType}
      />
    </div>

    <br />


    <div style={divStyle}>
      <SudokuGrid />
    </div>

  </div>
)


AppContainer.propTypes = {
  enabled: PropTypes.bool.isRequired,
  focusCell: PropTypes.string,
  focusType: PropTypes.string,
  setDisabled: PropTypes.func.isRequired,
  setEnabled: PropTypes.func.isRequired,
  setFocusCell: PropTypes.func.isRequired,
  setFocusType: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  enabled: state.app.enabled,
  focusCell: state.app.focusCell,
  focusType: state.app.focusType,
})

const actions = {
  ...appActions,
}

export default connect(mapStateToProps, actions)(AppContainer)
