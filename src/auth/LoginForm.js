import React, { useState } from 'react'
import JoblyApi from '../api/api'

/** Displays a login form.
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function LoginForm({ handleLogin }) {
  const INITIAL_FORM_DATA = {
    username: "",
    password: ""
  }
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
    handleLogin(loginForm);
    console.log("JoblyApi.token", JoblyApi.token)
    setLoginForm(INITIAL_FORM_DATA);
  }

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> username </label>
        <br />
        <input type="text" id="username" name="username" onChange={handleChange} />
        <br />
        <label htmlFor="password"> password </label>
        <br />
        <input type="password" id="password" name="password" onChange={handleChange} />
        <br />
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default LoginForm