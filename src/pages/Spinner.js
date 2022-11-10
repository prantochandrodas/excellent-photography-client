import React from 'react';
import loading from '../assets/loading.gif'
const Spinner = () => {
    return (
        <div className='w-3/12  mx-auto my-auto h-96 flex items-center '>
            <img src={loading} alt="" className='text-center ml-20' />
        </div>
    );
};

export default Spinner;