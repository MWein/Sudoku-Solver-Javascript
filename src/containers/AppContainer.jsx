import ControlPanel from '../components/ControlPanel'
import React from 'react'
import SudokuGrid from '../components/SudokuGrid'

const AppContainer = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <table>
      <tbody>
        <tr>
          <td>
            <SudokuGrid />
          </td>
          <td width='50px' />
          <td>
            <ControlPanel />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default AppContainer
