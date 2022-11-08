import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Login = () => {

  
    const {login,signInwithGoogle}=useContext(AuthContext);
    const provider=new GoogleAuthProvider();
    const handelLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .then(error=>{ 
            console.log(error);
           
        })
    }


    const handelGoogle=()=>{
        signInwithGoogle(provider)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .then(error=>{ 
            console.log(error);
           
        })

    }
    return (
        <div className="hero min-h-full py-5 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
               
                <div className="card flex-shrink-0 w-96 max-w-xl shadow-2xl bg-base-100">
                <h1 className="text-4xl font-bold text-center mt-4">Login now</h1>
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handelGoogle} className="btn btn-warning">Google</button>
                        </div>
                        
                    </form>
                    <p className='text-center p-5'>New to Excellent Photography <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                     
                </div>
            </div>
        </div>
    );
};

export default Login;