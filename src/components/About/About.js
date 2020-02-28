import React from 'react';
import "./About.scss";

const About = () => {
    return (
        <div className="about">
            <div className="about-app">
                <h3>About app</h3>
                <p>That's a simple app for all, who are looking for dog to adopt and for shelters that can reach more people with beautiful pets that needs home. Main panel provide set of complex information about each dog, its medical condition and special requirements. User can choose dog and add it to personal list or contact shelter to get more information about each pet. Moreover, if anyone know about dog that needs new home, they can public new position to the collection</p>
            </div>
            <div className="about-author">
                <h3>About author</h3>
                <p>I am junior frontend developer, full of passion and dedication to gain new skills. Most of my project are made in Vanilla JS and ReactJS. I dare to use other complementary libraries like Formik, Bootstrap, Yup. I am also familiar with tools like Webpack, Sass and Gulp.</p>
            </div>
        </div>
    );
};

export default About;
