import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const ReviewShow = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://desolate-stream-48500.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className="container mt-5 pt-3">
            <h3 className="text-center">CUSTOMER <span style={{color: '#FF817E'}}>REVIEWS</span></h3>
            <div className="row mt-5">
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default ReviewShow;