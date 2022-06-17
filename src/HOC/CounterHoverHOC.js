import React, { useState } from 'react'
import withCounter from './withCounter'

const CounterHoverHOC = ({count, handleIncrement}) => {
  console.log({count, handleIncrement});
 
  return (
    <div onMouseOver={handleIncrement}>
      Count - {count}
    </div>
  )
}

export default withCounter(CounterHoverHOC)