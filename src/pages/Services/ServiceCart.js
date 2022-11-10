
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCart = ({ service }) => {
    const { img, category_name, details, _id } = service;

    return (
        <div>
            <div className="card card-compact w-66  bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
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