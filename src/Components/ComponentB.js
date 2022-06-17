import React, {useContext} from 'react'
import { messageContext } from '../App'

const ComponentB = () => {
  const message = useContext(messageContext)
  return (
    <div>ComponentB 
      {/* <messageContext.Consumer>
        {(val) =>(
           <p>{val}</p>
        )}
      </messageContext.Consumer> */}
      <p>{message}</p>
    </div>
  )
}

export default ComponentB