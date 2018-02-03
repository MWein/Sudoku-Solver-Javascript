import Radio, { RadioGroup } from 'material-ui/Radio'
import { checkForConflicts, checkSolved, solveIteration, solve } from '../solverFunctions'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import { FormControlLabel } from 'material-ui/Form'
import Grid from 'material-ui/Grid'
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
  setFocusType,
  focusType,
  puzzleStatus,
}) => {
  const paperPadding = '10px'
  const paddingStyle = {
    paddingTop: paperPadding,
    paddingBottom: paperPadding,
    paddingLeft: paperPadding,
    paddingRight: paperPadding,
  }

  const createSection = (title, content, hasDivider) => (
    <div style={paddingStyle}>
      <Typography type='title'>{title}</Typography>
      <br />
      {content}
      {hasDivider ? <div><br /><Divider /></div> : null}
    </div>
  )

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


  const checkPuzzleState = () => {
    checkForConflicts()
    checkSolved()
  }


  const startStopButton = () => {
    setEnabled(!enabled)
    if (enabled) {
      solve()
    }
  }


  return (
    <Paper style={paddingStyle}>

      {
        createSection(
          'Solver Functions',
          (
            <div>
              {puzzleStatusText()}
              <br />
              <Button
                onClick={() => startStopButton()}
              >
                {enabled ? 'Start' : 'Stop'}
              </Button>
              <Button
                disabled={!enabled}
                onClick={() => solveIteration()}
              >
                Step
              </Button>

              <div>
                <Button
                  disabled={!enabled}
                  onClick={() => checkPuzzleState()}
                  style={{ width: '100%' }}
                >
                  Check Puzzle
                </Button>
              </div>

            </div>
          ),
          true
        )
      }


      {
        createSection(
          'Focus Cell',
          (
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  disabled={!enabled}
                  label='Cell ID'
                  onChange={event => setFocusCell(event.target.value)}
                  style={{ width: '50px' }}
                  value={focusCell}
                />
              </Grid>
              <Grid item xs={6}>
                <RadioGroup
                  onChange={event => setFocusType(event.target.value)}
                  value={focusType}
                >
                  <FormControlLabel control={<Radio />} disabled={!enabled} label='None' value='' />
                  <FormControlLabel control={<Radio />} disabled={!enabled} label='Row' value='row' />
                  <FormControlLabel control={<Radio />} disabled={!enabled} label='Column' value='col' />
                  <FormControlLabel control={<Radio />} disabled={!enabled} label='Box' value='box' />
                </RadioGroup>
              </Grid>
            </Grid>
          ),
          false
        )
      }
    </Paper>
  )
}


ControlPanel.propTypes = {
  enabled: PropTypes.bool.isRequired,
  focusCell: PropTypes.string.isRequired,
  focusType: PropTypes.string.isRequired,
  puzzleStatus: PropTypes.string,
  setEnabled: PropTypes.func.isRequired,
  setFocusCell: PropTypes.func.isRequired,
  setFocusType: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  enabled: state.app.enabled,
  focusCell: state.app.focusCell,
  focusType: state.app.focusType,
  puzzleStatus: state.app.puzzleState,
})

const actions = {
  ...appActions,
}

export default connect(mapStateToProps, actions)(ControlPanel)
