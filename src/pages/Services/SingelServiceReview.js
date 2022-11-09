import { StarIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const SingelServiceReview = ({allreview,category_name}) => {
    const {user}=useContext(AuthContext);
    const {customer,review,}=allreview;
    return (
        <div>
             <div className="card bg-slate-50 ml-4 shadow-xl">
                <div>
                    <div className='flex '>
                        <figure>

                            <img src={user?.photoURL} className="w-12 rounded-full m-4" alt="Movie" />

                        </figure>
                        <h2 className="card-title">{customer}</h2>
                    </div>
                    <div className='w-4 flex ml-4'>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                    </div>
                </div>
                <div className="card-body  pt-8">

                    <h1 className='text-xl'>About : {category_name}</h1>
                    <p>{review}</p>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default SingelServiceReview;