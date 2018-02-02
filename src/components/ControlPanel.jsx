import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'material-ui/Typography'
import { actions as appActions } from '../redux/actions/appActions'
import { connect } from 'react-redux'

const ControlPanel = ({
  enabled,
  setEnabled,
  setDisabled,
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

  return (
    <Paper style={paddingStyle}>

      {
        createSection(
          'Solver',
          (
            <div>
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
            </div>
          ),
          false
        )
      }


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
