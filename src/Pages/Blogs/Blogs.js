import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-content'>
            <h1 className='text-secondary text-center fw-bold'>Blog Content</h1>
            <p className='text-success'>1.What is the difference between authorization and authentication?</p>
            <p>Ans :Authorization is the process of giving someone  the ability to access a resource.Authorzation gives permission to someone to access something.
                Then Authentication is the process of recognizing a users identity.Authentication assures secure systems secure processes and enterprise information security.
                Here some difference between authorization and authentication
                1|Authentication varifies who the user is.2|Authentication is the first step of a good identity and access management process.3|Authentication is visible to and partially changeable by the user.
                1|	Authorization determines what resources a user can access.2|Authorization always takes place after authentication.3|Authorization isn't visible to or changeable by the user.
            </p>
            <br />
            <p className='text-success'>2.Why we use firebase?What other options do I have to implement authentication?</p>
            <p>Ans : The Firebase Realtime Database lets to  build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.There are lots of options to implement authentication in a project.
                some of them are [Spring Security,Passport JS,permit,AuthO etc]
            </p>
            <br />
            <p className='text-success'>3.What other services firebase provide other than authentication?</p>
            <p>Ans : The Firebase database offers so many services due to which it has great potential, so that it may easily replace custom backend development depending on the product development stage and the final goal (whether the product is built to engage active users or you need an MVP or a prototype). If you need to achieve a proof of concept with minimal resources, then Firebase is a good choice because it's free for a number of users and is preferable for the beginning.Firebase provides Cloud Firestore,Analytics,Hosting,Predictions etc.</p>
        </div>
    );
};

export default Blogs;