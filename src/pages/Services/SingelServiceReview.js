import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StarIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const SingelServiceReview = ({ allreview, category_name }) => {
    const { user } = useContext(AuthContext);
    const { customer, review, } = allreview;
    return (
        <div>
            <div className="card bg-slate-50 ml-4 shadow-xl">
                <div>
                    <div className='flex pt-4'>
                        <figure>

                            {user?.photoURL ?
                                <img src={user?.photoURL} className="w-12 rounded-full m-4" alt="Movie" />
                                :
                                <FontAwesomeIcon icon={faUser} className='text-2xl  m-4'></FontAwesomeIcon>
                            }

                        </figure>
                        <h2 className="card-title">{customer}</h2>
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