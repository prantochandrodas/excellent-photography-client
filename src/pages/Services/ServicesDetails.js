import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import DynamicTitle from '../Hooks/DynamicTitle';
import Review from '../Review/Review';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServicesDetails = () => {
    DynamicTitle('Details');
    const [allreviews, setAllReview] = useState([]);
    const service = useLoaderData();
    const { img, category_name, details, _id } = service;
    const { user } = useContext(AuthContext);
    // console.log(user);
    
    const handelReview = event => {
       
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const review = form.review.value;
        const reviews = {
            review_id: _id,
            serviceName: category_name,
            customer: name,
            email,
            review
        }
        fetch('https://excellent-photography-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)

        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('revjiew placed sucessfully');
                    setAllReview([...allreviews,reviews])
                    form.reset()
                }
            })
            .catch(error => console.log(error));


           
        }
     

    return (
        <div>
            <div className="card w-3/4 mx-auto bg-base-100 shadow-xl my-12">
                <figure>
                <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{category_name}</h2>
                    <p>{details}</p>
                    <p className='text-2xl'>All info about Service</p>
                    <ul>
                        <li>1.Get professional photographic</li>
                        <li>2.professional videography</li>
                        <li>3.Professional Qulity full edited picture</li>
                        <li>4.Professional Qulity full edited video films </li>
                        <li>5.Any kind of your requirement will be tried to mark happen</li>
                    </ul>
                </div>

            </div>
           <div>
                {
                    <Review id={_id}
                        category_name={category_name}
                        allreviews={allreviews}
                        setAllReview={setAllReview}
                    ></Review>
                }
               
            </div>  
        
            {user?.uid ?
                <> <div className='w-9/12 mx-auto my-12'>
                    <form onSubmit={handelReview}>
                        <h2 className="text-4xl my-4">Please give us your honest review about Our: {category_name}</h2>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                            <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                            <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost my-4 w-full  input-bordered" readOnly />

                        </div>
                        <textarea name="review" className="textarea textarea-bordered h-24 w-full" placeholder="Give Your Review" required></textarea>

                        <input className='btn' type="submit" value="Submit Your review" />
                    </form>
                </div></>
                :
                <>
                    <h1 className='text-3xl text-center my-12 text-orange-600'>You are not Login to the Site please go to <Link to={'/login'} className="text-blue-600">Login</Link></h1>
                    <div className='w-9/12 mx-auto my-12'>
                    <form onSubmit={handelReview}>
                        <h2 className="text-4xl my-4">Please give us your honest review about Our: {category_name}</h2>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                            <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                            <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost my-4 w-full  input-bordered" readOnly />

                        </div>
                        <textarea name="review" className="textarea textarea-bordered h-24 w-full" placeholder="Give Your Review" required></textarea>

                        <input className='btn' type="submit" value="Submit Your review"disabled />
                    </form>
                </div>
                </>
            }
        </div>
    );
};

export default ServicesDetails;