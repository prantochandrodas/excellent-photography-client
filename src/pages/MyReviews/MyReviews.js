import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PencilSquareIcon, StarIcon, TrashIcon } from '@heroicons/react/24/solid';
import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Contexts/AuthProvider';
import DynamicTitle from '../Hooks/DynamicTitle';

const MyReviews = () => {
    DynamicTitle('MyReview');
    const { user,logOut } = useContext(AuthContext);
    const [myReviews, setMyreviews] = useState([]);
    console.log(user);
    useEffect(() => {
     
        fetch(`https://excellent-photography-server.vercel.app/myreviews?email=${user?.email}`,{
            
            headers:{
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res =>{
                if(res.status === 401 || res.status === 403){
                    logOut();
                }
                return res.json()
            })
            .then(data => setMyreviews(data));
    }, [user?.email]);

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure , You want to cancel this review');
        if (proceed) {
            fetch(`https://excellent-photography-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        toast.error('Deleted sucess fully', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        const remaining = myReviews.filter(rev => rev._id !== id);
                        setMyreviews(remaining);
                    }
                })


        }
    }
    return (
        <div>
            {myReviews.length > 0 ?

                <>
                    <div className='grid lg:grid-cols-3 gap-12 p-12'>
                        {
                            myReviews.map(myReview =>
                             <>
                                <div className="card bg-slate-50 ml-4 shadow-xl">
                                    <div>
                                        <div className='flex '>
                                            <figure>
                                                {user?.photoURL ?
                                                    <img src={user?.photoURL} className="w-12 rounded-full m-4" alt="Movie" />
                                                    :
                                                    <FontAwesomeIcon icon={faUser} className='text-2xl  m-4'></FontAwesomeIcon>
                                                }

                                            </figure>
                                            <div>
                                                <h2 className="card-title">{myReview.customer}</h2>
                                                <h2 className="">{user?.email}</h2>

                                            </div>
                                        </div>
                                      

                                    </div>
                                    <div className="card-body  pt-8">

                                        <p>{myReview.review}</p>
                                    </div>
                                    <div className=' flex justify-end p-4'>
                                        <div onClick={() => handelDelete(myReview._id)} className='w-8 cursor-pointer'>
                                            <TrashIcon></TrashIcon>
                                        </div>
                                        <div className='w-8'>
                                            <PencilSquareIcon></PencilSquareIcon>

                                        </div>
                                    </div>
                                </div>
                            </>)
                        }



                        <ToastContainer></ToastContainer>
                    </div>
                </> :
                <>

                    <div className='text-5xl text-center text-orange-600 h-96 pt-40'>
                        <h1>No reviews Found</h1>
                    </div>
                </>
            }
        </div>
    );
};

export default MyReviews;