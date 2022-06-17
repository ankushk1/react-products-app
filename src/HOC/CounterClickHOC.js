import React, { useState } from 'react'
import withCounter from './withCounter'

const CounterClickHOC = ({count, handleIncrement, name}) => {
  console.log({count, handleIncrement});
  console.log(name);
  return (
    <div>
      Count - {count}

      <div>
        <button onClick={handleIncrement}>Click</button>
      </div>
    </div>
  )
}

export default withCounter(CounterClickHOC)