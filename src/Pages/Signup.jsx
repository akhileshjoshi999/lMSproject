import React, { useState } from 'react'
import Homelayout from '../Layouts/Homelayout'
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {toast,Toaster} from 'react-hot-toast';

export default function Signup() {

    const[previewimage,setPreviewimage]=useState("");
    const[signupdata,setSignupdata]=useState(
      {name:"",email:"", password:""}
    );
    function handleUserInput(e){
      const{name,value}=e.target;
      setSignupdata({...signupdata, 
        [name]:value})

    }
    function createNewAccount(event){
      event.preventDefault();
      if(!signupdata.name ||!signupdata.email || !signupdata.password)
      {
        toast.error("please fill all the details")
        console.log("error")
        return;

      }
    if(signupdata.name.length<5){
      toast.error("length of the name should be more than 5 characters")
      console.log("not more than 5")
      return;
    }
    if(!signupdata.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    {
      toast.error("please use email format")
      console.log("not email format")
      return;
    }

    }

  return (
    <Homelayout>

        <div className='flex items-center justify-center h-screen'>
            <form noValidate onSubmit={createNewAccount} className='flex flex-col justify-center shadow-[0_0_20px_black] px-10 py-4 text-white  text-xl '>Registration form
            <label htmlFor="image_uploads" className='cursor-pointer'>
            {previewimage? ( <img className='rounded-full m-auto w-24 h-24' src={previewimage} alt="" /> ) :( <BsPersonCircle className='rounded-full w-24 h-24 m-auto'/> )}
            </label>
           
            <input  className='hidden' type="file" id='image_uploads' accept=".jpg ,.png " name='image_uploads'/>

            <div className='flex flex-col gap-1'>
                <label htmlFor="fullname" className='font-semibold'> Name:</label>
                <input type="text"
                required 
                name='name'
                id='name'
                placeholder='enter your name'
                className='bg-transparent px-2 py-2 border'
                onChange={handleUserInput}
                value={signupdata.name}


                 />
                 </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email " className='font-semibold'> Email:</label>
                <input type="email"
                required 
                name='email'
                id='email'
                placeholder='enter your email'
                className='bg-transparent px-2 py-2 border'
                onChange={handleUserInput}
                value={signupdata.email}

                 />
                 
            </div>
          
            <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='font-semibold'> Password:</label>
                <input type="password"
                required 
                name='password'
                id='password'
                placeholder='enter your password'
                className='bg-transparent px-2 py-2 border'
                onChange={handleUserInput}
                value={signupdata.password}

                 />
                 
            </div>
          

            <button type='submit' className='bg-yellow-500 hover:bg-yellow-600 translate-y-2 rounded-sm py-2 my-1 font-semibold'>Create account</button>
            <p className='mt-2'>Already have an account? <Link to='login' className='Link text-accent cursor-pointer'>login</Link></p>

            </form>
        </div>
    </Homelayout>
  )
}
