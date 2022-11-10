import React from 'react';
import DynamicTitle from '../Hooks/DynamicTitle';

const Blogs = () => {
    DynamicTitle('Blogs');
    return (
        <div className='w-9/12 mx-auto'>
            <div className='my-4'>
                <h1 className='text-3xl'>1. Difference between SQL and NoSQL. <br /> Ans:-</h1>
                <p> relational SQL or non-relational NoSQL data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. <br />
                    The Main Differences: <br />
                    a.Type – <br />
                    SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. <br />
                    b. Language – <br />
                    SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                    A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.
                </p>
            </div>
            <div className='my-4'>
                <h1 className='text-4xl'>What is JWT, and how does it work? <br /> Ans:-</h1>
                <p> JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
            </div>

            <div className='my-4'>
                <h1 className='text-4xl'>What is the difference between javascript and NodeJS? <br /> Ans:-</h1>
                <p>
                    1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. <br />

                    As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br />
                    <br />
                    2.JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.

                </p>
            </div>
            <div className='my-4'>
                <h1 className='text-4xl'>How does NodeJS handle multiple requests at the same time? <br /> Ans:-</h1>
                <p >
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>
            </div>
        </div>
    );
};

export default Blogs;