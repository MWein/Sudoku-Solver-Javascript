import { solve, solveIteration } from '../solverFunctions'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import { actions as appActions } from '../redux/actions/appActions'
import { connect } from 'react-redux'

const ControlPanel = ({
  enabled,
  setEnabled,
  focusCell,
  setFocusCell,
  puzzleStatus,
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
            onClick={() => startStopButton()}
            style={{ width: '100%' }}
          >
            {enabled ? 'Start' : 'Stop'}
          </Button>

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
  puzzleStatus: PropTypes.string,
  setEnabled: PropTypes.func.isRequired,
  setFocusCell: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  enabled: state.app.enabled,
  focusCell: state.app.focusCell,
  puzzleStatus: state.app.puzzleState,
})

const actions = {
  ...appActions,
}

export default connect(mapStateToProps, actions)(ControlPanel)
