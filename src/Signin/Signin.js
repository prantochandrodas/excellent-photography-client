import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../pages/Contexts/AuthProvider';
import DynamicTitle from '../pages/Hooks/DynamicTitle';

const Signin = () => {
    DynamicTitle('Signin');
    const navigate=useNavigate();
    const {createUser}=useContext(AuthContext);
    const handelSignin=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const photoUrl=form.photoUrl.value;
        const password=form.password.value;
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate('/')
        })
        .then(error=>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content  flex-col lg:flex-row-reverse p-0">
               
                <div className="card my-10 flex-shrink-0 lg:w-96 w-[90%]  max-w-xl shadow-2xl bg-base-100">
                <h1 className="lg:text-4xl text-2xl font-bold text-center mt-4">Signin now</h1>
                    <form onSubmit={handelSignin}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo Url" name='photoUrl' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                       
                    </form>
                    <p className='text-center pb-4'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;