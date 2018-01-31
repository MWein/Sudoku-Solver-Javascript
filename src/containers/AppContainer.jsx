import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import SudokuGrid from '../components/SudokuGrid'
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
    </div>

    <br />

    <div style={divStyle}>
      <SudokuGrid />
    </div>
  </div>
)


AppContainer.propTypes = {
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

export default connect(mapStateToProps, actions)(AppContainer)
