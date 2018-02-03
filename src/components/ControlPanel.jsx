import Button from 'material-ui/Button'
import Checkbox from 'material-ui/Checkbox'
import { FormControlLabel } from 'material-ui/Form'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import { actions as appActions } from '../redux/actions/appActions'
import { connect } from 'react-redux'
import { solve } from '../solverFunctions'
import { actions as solverActions } from '../redux/actions/solverEngineActions'

const ControlPanel = ({
  enabled,
  setEnabled,
  focusCell,
  setFocusCell,
  puzzleStatus,
  instant,
  setInstantMode,
}) => {
  const paperPadding = '10px'
  const paddingStyle = {
    paddingTop: paperPadding,
    paddingBottom: paperPadding,
    paddingLeft: paperPadding,
    paddingRight: paperPadding,
  }

  const puzzleStatusText = () => {
    const color = () => {
      switch (puzzleStatus) {
        case 'Solved': return 'green'
        case 'Conflicts': return 'red'
        default: return 'black'
      }
    }

    const uppercaseStatus = puzzleStatus.toUpperCase()

    return (
      <div style={{ display: 'flex', justifyContent: 'center', color: color() }}>
        {uppercaseStatus}
      </div>
    )
  }

  const startStopButton = () => {
    setEnabled(!enabled)
    if (enabled) {
      solve()
    }
  }


  return (
    <Paper style={paddingStyle}>

      <div style={paddingStyle}>
        <Typography type='title'>Control Panel</Typography>
        <br />
        <div>
          {puzzleStatusText()}
          <br />
          <Button
            color='primary'
            onClick={() => startStopButton()}
            raised
            style={{ width: '100%' }}
          >
            {enabled ? 'Start' : 'Stop'}
          </Button>

          <FormControlLabel
            control={
              <Checkbox
                checked={instant}
                onChange={event => setInstantMode(event.target.checked)}
              />
            }
            label='Instant Mode'
          />

          <br /><br />

          <div>
            <TextField
              disabled={!enabled}
              label='Focus Cell (ex. 1-1)'
              onChange={event => setFocusCell(event.target.value)}
              style={{ width: '100%' }}
              value={focusCell}
            />
          </div>

        </div>
      </div>

    </Paper>
  )
}


ControlPanel.propTypes = {
  enabled: PropTypes.bool.isRequired,
  focusCell: PropTypes.string.isRequired,
  instant: PropTypes.bool.isRequired,
  puzzleStatus: PropTypes.string,
  setEnabled: PropTypes.func.isRequired,
  setFocusCell: PropTypes.func.isRequired,
  setInstantMode: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  enabled: state.app.enabled,
  focusCell: state.app.focusCell,
  puzzleStatus: state.app.puzzleState,
  instant: state.solver.instant,
})

const actions = {
  ...appActions,
  ...solverActions,
}

export default connect(mapStateToProps, actions)(ControlPanel)
