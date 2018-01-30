import React from 'react'
import SudokuSquareGroup from '../components/SudokuSquareGroup'

const AppContainer = () => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>

      <SudokuSquareGroup
        group={0}
      />

    </div>
  </div>
)

export default AppContainer
