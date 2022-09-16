
import React from 'react';
import "./Index.css"
function index() {
  return (
    <section className="container">
 <Image />
<FormPage />
<LastInput />
</section>
    )
}

const FormPage = () =>{
    return (
        <>
         <Text />
        <Form />
        </>
       
    )
}

const Image = () => <img src="C:\Users\charles\Desktop\project\group-5_atusatseiii\src\assets" />
const Text = () => {
    return(
 <div>
     <div>
     <h1>Login</h1>
     <P>Your details are kept safe and with it you can always gain access!
</P>
     </div>
 </div>
    )
}

const Form = () =>{
    const handleSubmit = (e) =>{
  e.preventDefault();
  console.log("this is my work")
    }
    return (
        <>
       <form className='form'>
           <input type = "text" placeholder='email' className='input'/>
           <input type="text" placeholder='password' className='input'/>
           <button type="submit" className='btn' onClick={handleSubmit}>Login</button>
           <a href='#'>Not Registered? Sign Up</a>
           
    </form> 
        
        </>
    )
}

const LastInput = () =>{
    return (
        <>
       <div className='last-input'><a href='#'>Change Password</a></div>
        </>
    )
}



//     </div>
//   );
// }

export default index;
