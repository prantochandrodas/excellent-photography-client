import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import DynamicTitle from '../Hooks/DynamicTitle';
const Login = () => {
    DynamicTitle('Login');
    const [error,setError]=useState('');
    const {login,signInwithGoogle}=useContext(AuthContext);
    const location = useLocation();
    const navigate=useNavigate();
    const from = location.state?.from?.pathname || '/';
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

            const currentUser={
                email:user.email
            }
            console.log(currentUser);
            fetch('https://excellent-photography-server.vercel.app/jwt',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                localStorage.setItem('token',data.token);
            })



            navigate(from,{replace:true});
        })
        .catch(error=>{ 
            console.log(error);
           setError(error.message);
        })
    }


    const handelGoogle=()=>{
        signInwithGoogle(provider)
        .then(result=>{
            const user=result.user;
            navigate(from,{replace:true});
        })
        .then(error=>{ 
            console.log(error);
           
        })

    }
    return (
        <div className="hero min-h-full py-5 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse p-0">
               
                <div className="card flex-shrink-0 lg:w-96 w-[90%] max-w-xl shadow-2xl bg-base-100">
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
                    <p className='text-center p-5'>New to Excellent Photography <Link className='text-orange-600 font-bold' to="/signIn">Sign Up</Link> </p>
                     <p className=' mx-auto my-4 p-4 text-red-600'>{error}</p>
                </div>
            </div>
           
        </div>
    );
};

export default Login;