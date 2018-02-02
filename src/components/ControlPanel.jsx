import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import { actions as appActions } from '../redux/actions/appActions'
import { connect } from 'react-redux'


const ControlPanel = ({
  enabled,
  setEnabled,
  setDisabled,
}) => {

  const linterAway = 'Hello, World'

  return (
    <Paper>
      {linterAway}


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
    </Paper>
  )
}


ControlPanel.propTypes = {
  enabled: PropTypes.bool.isRequired,
  setDisabled: PropTypes.func.isRequired,
  setEnabled: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  enabled: state.app.enabled,
})

const actions = {
  ...appActions,
}

export default connect(mapStateToProps, actions)(ControlPanel)
