import React, { useState } from 'react'

const withCounter = (PrevComp) => ({name, name2}) => {

  const [count , setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <PrevComp
      name={name}
        count={count}
        handleIncrement={handleIncrement}
      />
    </div>
  )
}

export default withCounter