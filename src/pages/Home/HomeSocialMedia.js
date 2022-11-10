import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const HomeSocialMedia = () => {
    return (
        <div className='my-12'>
            <h1 className='text-5xl text-center'>Contact us on social media</h1>
            <div className='my-12 lg:grid lg:grid-cols-2 gap-10 w-9/12 mx-auto '>
                <div className='ml-5 mt-4 p-4 bg-white-600 shadow-2xl  border-solid border-2 border-gray-600 rounded-lg'>
                    <FontAwesomeIcon icon={faFacebook} className='text-5xl  text-gray-600'></FontAwesomeIcon>
                    <h2 className='4xl'>Connect us on facebook and be mamber of our facebook family</h2>
                </div>
                <div className='ml-5 mt-4 p-2 border-solid shadow-2xl border-2 border-gray-600 rounded-lg'>
                    <FontAwesomeIcon icon={faInstagram} className='text-5xl text-gray-600'></FontAwesomeIcon>
                    <h2 className='4xl'>Go to our instragram and do follow us for all latest update</h2>
                </div>
                <div className='ml-5 mt-4 p-2 border-solid shadow-2xl border-2 border-gray-600 rounded-lg'>
                    <FontAwesomeIcon icon={faTwitter} className="text-5xl text-gray-600"></FontAwesomeIcon>
                    <h2 className='4xl'>Follow us on Twitter . Get all the info of our website and be with us</h2>
                </div>
              
               
            </div>
        </div>
    );
};

export default HomeSocialMedia;