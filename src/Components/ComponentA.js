import React from 'react'
import { useHistory } from 'react-router'
import ComponentB from './ComponentB'

const ComponentA = () => {

  const history = useHistory()

  // console.log(history)
  const onSubmit = () => {
    // do something like signup  user

    // you have to redirect

    history.push('/todo/1', {name:"user1"})
  }

  return (
    <div>ComponentA
      <ComponentB/>
      <button onClick={() => onSubmit()}>Submit</button>
    </div>
  )
}

export default ComponentA