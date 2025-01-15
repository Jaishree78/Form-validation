import React from 'react'
import useForm from '../hooks/useForm'
import { Validate } from '../Utils/Validate'

const Formsignup = () => {
    const {handlechange,values,handlesubmit,error}=useForm(Validate)
    // const handleover=(e)=>{
    //     const {name,value}=e.target
    //     console.log(name,value);
    //     }
  return (
        <div className="form-content-right">
            <form className="form" onSubmit={handlesubmit}>
                   <h1>Get Started with ustoday!Create your account</h1>
                    <div className="form-inputs">
                         <label className="form-label" htmlFor="username">Username</label>
                          <input id="username" type="text" name="username"  value={values.username}   className="form-input" onChange={handlechange}  placeholder='Enter your username' />
                            {error.username && <p>{error.username}</p>}
                             </div>
             <div className="form-inputs">
                <label className="form-label" htmlFor="email">Email</label>
             <input id="email" type="email"
             name="email" value={values.email}
             className="form-input" onChange={handlechange}
             placeholder='Enter your email' />
             {error.email && <p>{error.email}</p>}
              </div>
             <div className="form-inputs">
             <label className="form-label" htmlFor="password">password</label>
             <input id="password" type="password"
             name="password" value={values.password}
             className="form-input" onChange={handlechange}
             placeholder='Enter your password' />
             {error.password && <p>{error.password}</p>}
             </div>
             <div className="form-inputs">
                <label className="form-label" htmlFor="password2">confirm password</label>
             <input id="password2" type="password"
             name="password2" value={values.password2}
             className="form-input" onChange={handlechange}
             placeholder='Enter your confirm password' />
             {error.password2 && <p>{error.password2}</p>}
             </div>
              <button className="input-form-btn" type='submit'>Sign up</button>
              <span className="form-input-login">Already have an account?Login 
            <a href="#">here</a>
             </span>
             </form>
        </div>
  )
}

export default Formsignup