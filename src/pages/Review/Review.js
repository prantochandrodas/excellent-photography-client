import React, { useEffect, useState } from 'react';
import SingelServiceReview from '../Services/SingelServiceReview';
const Review = ({ id, category_name ,setAllReview,allreviews}) => {
  
    useEffect(() => {
        fetch(`https://excellent-photography-server.vercel.app/reviews?review_id=${id}`)
            .then(res => res.json())
            .then(data => setAllReview(data));
    }, []);
    console.log(allreviews);



    return (
     <div>
        { allreviews?.length>0? <>
        <div className='grid lg:grid-cols-3 gap-12 p-12'>
            {
                allreviews.map(allreview => <SingelServiceReview
                    allreview={allreview}
                    key={allreview._id}
                    category_name={category_name}
                ></SingelServiceReview>)
            }
        </div>
       </>:
        <>
            <h1 className='text-xl text-orange-600 text-center'>No reviews found Please give your honest reviews </h1>
        </>
       }
     </div>
    );
};

export default Review;