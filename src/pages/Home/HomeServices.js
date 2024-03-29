import { Link, useLoaderData } from "react-router-dom";

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './HomeServices.css'
const HomeServices = ({ service }) => {



    const { img, category_name, details, _id } = service;

    return (
        <section class="articles">
            <article>
                <div class="article-wrapper">
                    <figure>
                        <img src={img} alt="" />
                    </figure>
                    <div class="article-body">
                        <h2>{category_name}</h2>
                        <p>{details?.length > 100 ?
                            <>{details.slice(0, 100) + "..."}{<Link to={`/services/${_id}`} className="text-blue-600">See More</Link>}</> :
                            details

                        }</p>
                        <Link to={`/services/${_id}`} class="read-more py-4 no-underline border-none">
                            Read more <span class="sr-only">about this is some title</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default HomeServices;