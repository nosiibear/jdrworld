import React from 'react'
import { Link } from 'react-router-dom'
import "./project.css"

export default function Jdrworld() {
    return (
        <div className="pageBackground">
            <div className="topText">J. D. R. WORLD.</div>
            <div className="pageContainer">
                <p>An interactive portfolio and blog website, built on the MERN stack- MongoDB, Express, React and Node.js.&nbsp;
                MDX allows each blog post to contain their own interactive JSX elements.&nbsp;
                React-three-fiber powers the site's 3D homepage.</p>
                <p>But best of all, you can follow my exact path of how I created this website <Link to="/post/61021aa538fc1e2aa2764633">here.</Link></p>
                <p>This series of blog posts traces every tutorial I followed,
                every question I had, every answer I came to, and notes for every single day I worked on the website.&nbsp;
                I dove head-first into React, React Three Fiber, MongoDB, Netlify, Heroku, browser routing, web hosting, and web development in general.&nbsp;
                Before roughly three weeks ago, the only thing I knew about web development was from the basic HTML and CSS course from FreeCodeCamp.&nbsp;
                I hadn't even used Git before. &nbsp;
                </p>
                <p>This is not to say that I've mastered any technology I just mentioned,
                or that I brazenly carved my own path in creating every single feature you see.&nbsp;
                You will see from the blog posts that I followed a number of tutorials in order to make this site work.&nbsp;</p>
                <p>
                I've included every site, code sandbox page, blog post, and tutorial that I have used or reinterpreted code from, save from W3Schools or Mozilla docs.&nbsp;
                However, maybe not every single StackOverflow page.&nbsp;
                If I solved a bug, as you'll see in the posts, I included the page that helped me solve the bug.&nbsp;
                </p>
                <br/>
                <hr/>
                <br/>
                <p>As of the 30th of July, 2021, the intro blog post will be written.&nbsp;
                I'll be transferring my OneNote notes into MDX blog posts, along with additional pages like sketches and inspiration boards that I accumulated along the way.&nbsp;

                </p>
            </div>
        </div>
    )
}
