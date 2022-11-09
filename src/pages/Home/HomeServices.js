import { Link, useLoaderData } from "react-router-dom";


const HomeServices = ({service}) => {

 
   
     const{img,category_name,details,_id}=service;
     console.log(details.length);
    return (
        <div className="card card-compact w-66 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category_name}</h2>
                <p>{details?.length>100 ?
                <>{details.slice(0,100)+"..."}{<Link className="text-blue-600">See More</Link>}</>:
                details

                }</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;