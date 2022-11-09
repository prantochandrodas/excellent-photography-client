import React, { useEffect, useState } from 'react';
import SingelServiceReview from '../Services/SingelServiceReview';
const Review = ({ id, category_name }) => {
    const [allreviews, setAllReview] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?review_id=${id}`)
            .then(res => res.json())
            .then(data => setAllReview(data));
    }, []);
    console.log(allreviews);



    return (
        <div className='grid lg:grid-cols-3 gap-12 p-12'>
            {
                allreviews.map(allreview => <SingelServiceReview
                    allreview={allreview}
                    key={allreview._id}
                    category_name={category_name}
                ></SingelServiceReview>)
            }
        </div>
    );
};

export default Review;