import React from 'react'
import "./portfolio.css"
import { Link } from 'react-router-dom'

export default function Portfolio() {
    return (
        <div className="portfolioBackground">
            <div className="portfolioContainer">
                <h1>Hey.</h1>
                <br/>
                <p>I'm Jonathan, a student developer and multimedia artist. I like coding, making 3D art, designing sounds, and doing student films.</p>
                <p>I haven't worked on many websites, but here's a few.</p>
                <p>Click <Link to="/jdrworld">here</Link> if you want to know more about how I made this site. &nbsp; &nbsp; &nbsp;
                As part of a web development tutorial, I completed the example project, which I have also hosted <a href="https://jdreactblog.netlify.app">here.</a>
                You can find the source code for that <a href="https://github.com/nausniboar/reactblogclient">here.</a></p>
                <p>I also created a <a href="https://codepen.io/nausniboar/pen/WNooQEP">tribute page</a> to one of my favorite directors,
                which was the result of a self-directed exercise from the FreeCodeCamp curriculum.</p>
                <p>I also do location sound and post audio for student films. I've worked on several of these films, but not many have a web presence. However, my most
                involved project has an <a href="https://www.imdb.com/title/tt13314882/">IMDb page,</a> as well as a <a href="https://vimeo.com/443873543">vimeo link,</a> if you're interested in that.</p>
                <p>I'm still a student, so I've got lots of opportunities ahead of me to expand my portfolio. I'll be updating this site regularly with new work, as well as fleshing out the look, feel and features, so stay tuned!</p>
            </div>
        </div>
    )
}
