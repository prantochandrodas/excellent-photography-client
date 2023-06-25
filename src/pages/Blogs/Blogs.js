import React from 'react';
import DynamicTitle from '../Hooks/DynamicTitle';
import './Blogs.css'
const Blogs = () => {
    DynamicTitle('Blogs');
    return (
        <section data-aos="zoom-in"
        data-aos-duration="3000">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div class="max-w-3xl">
                    <h2 class="text-3xl font-bold sm:text-4xl">
                        Wedding Photography Testimonials & Reviews from our Brides & Grooms
                    </h2>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <img
                            alt="Party"
                            src="https://images.squarespace-cdn.com/content/v1/615511137ee8bb0f8bbae591/acd7af94-a94c-4aa6-9ebb-1d5fddc3f56c/Dunes+Wedding+Palm+Beach+Sydney-939NB-0895.jpg?format=750w"
                            class="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div class="lg:py-16 art">
                        <article class="space-y-4 text-gray-600">
                            <h1 id='style-h1' className='font-semibold text-2xl'>Nicola & Brent - Long Reef Golf Club</h1>
                            <p id='animate-charcter'>
                                Hey Ronny <br /><br />
                                Thank you so much for turning our photos around so quickly!!!
                                <br /><br />We LOVE them all!!!!! We are so happy!!!
                            </p>
                            <br /><br />
                            <p id='animate-charcter'>
                                Thank you again!!
                                Nicola and Brent - wedding ceremony Governor Phillip Park reception Dunes Palm Beach
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;