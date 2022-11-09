import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const ServiceCart = ({ service }) => {
    const { img, category_name, details, _id } = service;
 
    return (
        <div>
            <div className="card card-compact w-66  bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" className='h-60' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category_name}</h2>
                    <p>{details?.length > 100 ?
                        <>{details.slice(0, 100) + "..."}{<Link to={`/services/${_id}`} className="text-blue-600">See More</Link>}</> :
                        details

                    }</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;