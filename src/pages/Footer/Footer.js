import React from 'react';
import github from '../../assets/blogs/github.webp'
import facebook from '../../assets/blogs/Facebook_icon.svg.png'
import linkdin from '../../assets/blogs/linkedin.png'
import gmail from '../../assets/blogs/gmail.png';
const Footer = () => {
    return (
        
        <footer class="">
            <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8" style={{background:'rgba(6,34,63,255)',color:'white'}}>
                
                <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                    <div class="mx-auto max-w-sm lg:max-w-none">
                        <p class="mt-4 text-center text-white-500 lg:text-left lg:text-lg">
                           We are the best service providers of photography.We always take care of customer feedback customers are the valueable factor of our company. 
                        </p>

                        <div class="mt-6 flex justify-center gap-4 lg:justify-start">
                            <a
                                class="text-white-700 transition hover:text-white-700/75"
                                href="https://www.facebook.com/pranto.chandrodas.33/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span class="sr-only"> Facebook </span>

                                <svg
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>

                          

                            <a
                                class="text-white-700 transition hover:text-white-700/75"
                                href="https://github.com/prantochandrodas"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span class="sr-only"> GitHub </span>

                                <svg
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>

                           
                        </div>
                    </div>

                    <div
                        class="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
                    >
                        <div>
                            <strong class="font-medium text-gray-300"> Services </strong>
                         
                            <ul class="mt-6 space-y-1">
                                <li>
                                    <a
                                        class="text-white-700 transition hover:text-white-700/75"
                                        href="/"
                                    >
                                        Weeding photos
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-white-700 transition hover:text-white-700/75"
                                        href="/"
                                    >
                                        Couple session
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-white-700 transition hover:text-white-700/75"
                                        href="/"
                                    >
                                       Pre wedding
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-white-700 transition hover:text-white-700/75"
                                        href="/"
                                    >
                                      Post Weeding
                                    </a>
                                </li>
                            </ul>
                        </div>
                       
                        <div>
                            <strong class="font-medium text-gray-300"> Company </strong>

                            <ul class="mt-6 space-y-1">
                                <li>
                                    <a
                                        class="text-white-700 transition hover:text-white-700/75"
                                        href="/"
                                    >
                                        Services
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-white-700 transition hover:text-white-700/75"
                                        href="/"
                                    >
                                        Blogs
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-white-700 transition hover:text-white-700/75"
                                        href="/"
                                    >
                                        Riviews
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-white-700 transition hover:text-white-700/75"
                                        href="/"
                                    >
                                        Our Team
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <strong class="font-medium text-gray-300"> Support </strong>

                            <ul class="mt-6 space-y-1">
                                <li>
                                    <a
                                        class="text-white-700 transition hover:text-white-700/75"
                                        href="/"
                                    >
                                        FAQs
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-white-700 transition hover:text-white-700/75"
                                        href="/"
                                    >
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-white-700 transition hover:text-white-700/75"
                                        href="/"
                                    >
                                        Live Chat
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="mt-16 border-t border-gray-100 pt-8">
                    <p class="text-center text-xs/relaxed text-gray-500">
                        © Company 2022. All rights reserved.

                        <br />

                        Created with
                        <a
                            href=""
                            class="text-white-700 underline transition hover:text-white-700/75"
                        >React</a
                        >
                        and
                        <a
                            href=""
                            class="text-white-700 underline transition hover:text-white-700/75"
                        >Express.js</a
                        >.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;