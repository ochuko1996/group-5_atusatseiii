import React from 'react'
import Input from '../../atom/Input'
import Text from '../../atom/Text'
import Button from '../../atom/Button'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../atom/ArrowLeft'
import NavToggle from '../../molecules/NavToggle'
import NavFooter from '../../molecules/NavFooter'

const width = '90%'
const borderRadius = '50px'


function SignUp({showFooter, setShowFooter}) {
    
  return (
    <div className="relative">

    <section className="relative flex " style={{height: "100vh"}}>
        <div className="hidden lg:block bg-left lg:w-1/2 relative" style={{backgroundImage: `url(https://atuwatseiii.com/static/media/speeches.32008b73e3d952cf67ed.png)`}}>
            <ArrowLeft style={{backgroundColor: '#fff', border: 'none'}}/>    
        </div>
        <div className="lg:w-1/2 w-full flex justify-center  items-center flex-col " style={{padding: '30px 0', backgroundColor:'#f5f5f5',}}>
            <div className="form-container flex justify-center items-center flex-col bg-white" style={{ minHeight: "80%", minWidth: '80%',  borderRadius: '10px', padding: '30px 0'}}>

                <form action="" className=' form ' style={{ width: '100%', padding: '30px 0'}}>
                    <Text type='h1' className='font-bold' style={{fontSize: '2rem', width:`${width}`, marginBottom: "8px" }}>
                        Sign Up
                    </Text>
                    <Text style={{width:`${width}`, fontSize: '12.8px', marginBottom: '16px'}} className=''>
                        Your details are kept safe and with it you can always gain access!
                    </Text>
                    <Input type='email' className='loginInput mb-4' placeholder="email" style={{width:`${width}`, borderRadius: `${ borderRadius}`, }}/>
                    <Input type='password'className='loginInput' placeholder='password' />
                    <Button className='text-white mb-4'>
                        Sign Up
                    </Button>
                    <Link to='/login' className='text-center formText mb-4' style={{color:"#c3c3c3", }} >
                        Already Registered? Login
                    </Link>
                </form>
            </div>
        </div>
        
    </section>
    <NavToggle setShowFooter={setShowFooter}/>
    <NavFooter showFooter={showFooter} setShowFooter={setShowFooter}/>
    </div>
  )
}

export default SignUp