import React, {useState} from 'react'
import JoblyApi from '../api/api'

/** Displays a sign-up form.
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

 function SignupForm(){

   const INITIAL_FORM_DATA = {
     username: "",
     password: "",
     firstName: "",
     lastName: "",
     email: ""
   }
   // TODO: add data validation and alerts

   const [signupForm, setSignupForm] = useState(INITIAL_FORM_DATA);

   function handleChange(evt) {
     const { name, value } = evt.target;
     setSignupForm(oldFormData => ({
       ...oldFormData,
       [name]: value
     }))
   }

   async function handleSubmit(evt) {
     evt.preventDefault();
     const token = await JoblyApi.registerUser(signupForm);
     JoblyApi.token = token;
     console.log("JoblyApi.token", JoblyApi.token)
     setSignupForm(INITIAL_FORM_DATA);
   }

   return (
     <div className="SignupForm">
       <form onSubmit={handleSubmit}>
         <label htmlFor="username"> Username </label>
         <br />
         <input type="text" id="username" name="username" onChange={handleChange} />
         <br />
         <label htmlFor="password"> Password </label>
         <br />
         <input type="password" id="password" name="password" onChange={handleChange} />
         <br />
         <label htmlFor="firstName"> First Name </label>
         <br />
         <input type="text" id="firstName" name="firstName" onChange={handleChange} />
         <br />
         <label htmlFor="lastName"> Last Name </label>
         <br />
         <input type="text" id="lastName" name="lastName" onChange={handleChange} />
         <br />
         <label htmlFor="email"> Email </label>
         <br />
         <input type="text" id="email" name="email" onChange={handleChange} />
         <br />
         <button className="btn-primary">Submit</button>
       </form>
     </div>
   )
 }

 export default SignupForm