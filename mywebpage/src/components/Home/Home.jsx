import React from "react";
import logo from "../assets/fb-logo.png"
import logoinsta from "../assets/insta-logo.png"
import logotwitter from "../assets/twitter-logo.png"
import logolinke from "../assets/linke-logo.png"
import forumscreen from "../assets/Webdevforums.jpg"
import courses from "../assets/courses.jpg"

const Home = () => {

    return <div className="Home-container">
        <div id="Intro">
            <span className="Titlespan">Welcome to the World Biggest Code Community!</span>
            <br />
            <span className="maintext">Congratulations! If you came here I guess that you might be interested in code and ready
                to learn. Here you will meet a lot of people like you, people that is looking for someone to learn with and share their
                knowledge.</span>
        </div>
        <div id="home-images">
            <div class="home-image-group">
                <p class="p-index-images">Check our courses</p>

                <a href="courses.html" title="courses">
                    <img src={courses} class="index-img" alt="courses"></img></a>

            </div>
            <div class="home-image-group">
                <p class="p-index-images">Talk with others in our forum</p>

                <a href="forum.html" title="forum">
                    <img src={forumscreen} class="index-img" alt="forum"></img></a>

            </div>
        </div>
        <div id="social-media">
            <a href="http://www.facebook.com" title="facebook" target="_blank">
                <img src={logo} class="social-logo" alt="facebook"></img></a>
            <a href="http://instagram.com" title="instagram" target="_blank">
                <img src={logoinsta} class="social-logo" alt="instagram"></img></a>
            <a href="http://www.twitter.com" title="twitter" target="_blank">
                <img src={logotwitter} class="social-logo" alt="twitter"></img></a>
            <a href="http://www.linkedin.com" title="linkedin" target="_blank">
                <img src={logolinke} class="social-logo" alt="linkedin"></img></a>
        </div>
    </div>
};

export default Home;