import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'


const ControlPanel = () => {

  const linterAway = 'Hello, World'

  return (
    <Paper style={calcPaperStyle()}>
      {linterAway}
    </Paper>
  )
}


ControlPanel.propTypes = {
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(ControlPanel)
