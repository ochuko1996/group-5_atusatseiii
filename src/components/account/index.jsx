
import React from 'react';

import './index.css'
const FirstComponent = ()=>{
  return(
    <section className='main-component'>
   <Image />
   <FormPage />
   
    </section>
  )
}

const Image = ()=>  <div className='image'><img  src="Capture.PNG" alt=''  /></div>



const FormPage = () =>{
  return(
    <section className='formpage'>
    <Text />
    <Form />
  
    </section>
  )
}

const Text = () =>{
return(
  <div className='text'>
    <h1>Login</h1>
    <p>Your details are kept safe and with it you can always gain access!</p>
  </div>
)
}

const Form = () =>{
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("awesome work well-done")
  }
  return(
    <>
    <form className='form'>
      <input type="text" placeholder='email' className='input'/>
      <input type="text" placeholder='password' className='input'/>
      <button type='submit' onClick={handleSubmit} className='btn'>Login</button>

      <a href='#'>Not Registered? Sign Up</a>
      <a href='#' className='last-input'>Change Password </a>
    </form>
    </>
  )
};

  


export default index;
