import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


/** Displays a login form.
 * 
 * Props
 * - handleLogin: function passed from App
 * 
 * State
 * - loginForm: holds data from login form
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function LoginForm({ handleLogin }) {
  const INITIAL_FORM_DATA = {
    username: "",
    password: ""
  }

  const history = useHistory()

  // TODO: add data validation and alerts

  const [loginForm, setLoginForm] = useState(INITIAL_FORM_DATA);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginForm(oldFormData => ({
      ...oldFormData,
      [name]: value
    }))
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    //Makes API call to login; got fn from App
    handleLogin(loginForm);

    //Reset form
    setLoginForm(INITIAL_FORM_DATA);

    //Add to history
    history.push("/")
  }

  //TODO: use divs instead of br's
  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> Username </label>
        <br />
        <input type="text" id="username" name="username" onChange={handleChange} />
        <br />
        <label htmlFor="password"> Password </label>
        <br />
        <input type="password" id="password" name="password" onChange={handleChange} />
        <br />
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default LoginForm