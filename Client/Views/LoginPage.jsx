import React, { useState } from 'react'

function LoginPage() {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value}));
  }

  async function handleSubmit() {
    try {
      let response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {'Content-Type': 'application/json'}
      });
      response = await response.json();
      console.log('response:', response)
      //TODO: handle response
    } catch (error) {
      console.log(`The following error occured during login attempt: ${error}`);
    }
  }


  return (
    <>
      <div className='enter-userName'>
        <label>Username:
          <input type="text" name='userName' value={formData.userName} onChange={handleChange}/>
        </label>
      </div>
      <div className='enter-password'>
        <label>Password:
          <input type="text" name='password' value={formData.password} onChange={handleChange}/>
        </label>
      </div>
      <input className='login-button' type="button" value='Submit' onClick={handleSubmit}/>
      <br />
      <a href="/signup">Signup</a>
    </>
  )
}

export default LoginPage