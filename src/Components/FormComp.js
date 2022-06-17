import React, { useEffect, useState } from 'react'

const FormComp = () => {

  const [name, setName] = useState({
    firstname: '',
    lastname: '',
    email:''
  })

  useEffect(() => {
    console.log('call')
  })
  const handleChange = (event) => {
    setName({...name,
      [event.target.name] : event.target.value
    })
  }

  return (
    <div>
      <form action="">
        <input type="text" placeholder="First Name" 
          name="firstname"
          value={name.firstname}
          onChange ={(e) => handleChange(e)}
        />
        <input type="text" placeholder="Last Name" 
          name="lastname"
          value={name.lastname}
          onChange ={(event) => handleChange(event)}
        />
        <input type="text" placeholder="Email" 
          name="email"
          value={name.email}
          onChange ={(event) => handleChange(event)}
        />
      </form>
      <p>Firstname - {name.firstname}</p>
      <p>Lastname - {name.lastname}</p>
      <p>Email - {name.email}</p>
    </div>
  )
}

export default FormComp