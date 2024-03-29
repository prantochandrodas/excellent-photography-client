import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Contexts/AuthProvider';
import DynamicTitle from '../Hooks/DynamicTitle';

const ServicesAdd = () => {
    DynamicTitle('Add Service');
    const {user}=useContext(AuthContext);
    const navigate=useNavigate();
    const handelAddService=event=>{
        event.preventDefault();
        const form = event.target;
      
        const category_name = form.category_name.value;
        const details = form.details.value;
        const img = form.img.value;
        const service={
            category_name,
            details,
           img
        }
        if(details.length<200){
            toast.error('Please enter more then 200 character details', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }else{
            fetch('https://excellent-photography-server.vercel.app/addServices', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(service)
    
            }).then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        alert('Services placed sucessfully');
                        toast.success('Services added successfully', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });
                           
                       form.reset();
    
                    }
                })
                .catch(error => console.log(error))
        }
       
    }
    return (
        <div data-aos="zoom-in" data-aos-duration="1000">

            <h2 className='lg:text-5xl text-3xl text-center my-2 lg:my-5'>Add new service</h2>
             <div className='lg:w-9/12 w-[90%] mx-auto lg:my-12 my-2'>
                    <form onSubmit={handelAddService}>
                       

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input name="category_name" type="text" placeholder="Enter service category" className="input input-ghost w-full my-4 input-bordered"  required/>
                            <input name="img" type="text" placeholder="Enter Img Url" className="input input-ghost w-full  input-bordered" required />
                        </div>
                        <textarea name="details" className="textarea textarea-bordered h-24 w-full" placeholder="Enter details of service" required></textarea>

                        <input className='btn' type="submit" value="Submit Your service" />
                    </form>
                </div>
                <ToastContainer></ToastContainer>
        </div>
    );
};

export default ServicesAdd;