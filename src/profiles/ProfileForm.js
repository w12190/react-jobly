import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../common/UserContext'

/** Displays a user profile.
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function ProfileForm({ handleProfileEdit }) {



  const { currentUser } = useContext(UserContext);

  const INITIAL_FORM_DATA = {
    password: currentUser.password,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email
  }
  const [profileForm, setProfileForm] = useState(INITIAL_FORM_DATA);

  const history = useHistory()


  function handleChange(evt) {
    const { name, value } = evt.target;
    setProfileForm(oldFormData => ({
      ...oldFormData,
      [name]: value
    }))
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const dataToUpdate = {
      password: profileForm.password,
      firstName: profileForm.firstName,
      lastName: profileForm.lastName,
      email: profileForm.email
    }
    // send new profile data to App 
    //TODO: handle error
    await handleProfileEdit(currentUser.username, dataToUpdate)
    //Add to history
    history.push("/")

  }


  return (
    <div className="ProfileForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> Username </label>
        <br />
        {/* TODO: do no allow user to change username */}
        <p>{currentUser.username} </p>
        <br />
        <label htmlFor="password"> Password </label>
        <br />
        <input type="password" id="password" name="password" value={profileForm.password} onChange={handleChange} />
        <br />
        <label htmlFor="firstName"> First Name </label>
        <br />
        <input type="text" id="firstName" name="firstName" value={profileForm.firstName} onChange={handleChange} />
        <br />
        <label htmlFor="lastName"> Last Name </label>
        <br />
        <input type="text" id="lastName" name="lastName" value={profileForm.lastName} onChange={handleChange} />
        <br />
        <label htmlFor="email"> Email </label>
        <br />
        <input type="text" id="email" name="email" value={profileForm.email} onChange={handleChange} />
        <br />
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default ProfileForm