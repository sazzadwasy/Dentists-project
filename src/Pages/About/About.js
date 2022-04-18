import React from 'react';
import './About.css'
import image from '../../images/crp.jpg'

const About = () => {
    return (
        <div>
            <div className='about-container'>
                <img src={image} alt='' />
                <div className='about-info'>
                    <h2>My Name is </h2>
                    <p>My name in Sazzad Hossain.</p>
                    <p>I am learning web development with programming hero.My desire is to learn web development and do a good job.I know is will take a lot of effort 8-9 hours and i am trying to give this time.I was more considerate at the firt months of the course but Iam having a little bit trouble after started college,coaching etc.I am doing as little as I can.I have a problem.I get a little nervous to work.But i will come over from this and work dedicatedly.</p>
                    <p>Alhamdulillah, i am in the flow of the course.Keep us supporting.</p>
                </div>
            </div>
        </div>
    );
};

export default About;