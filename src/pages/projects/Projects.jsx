import React from 'react'
import { Link } from "react-router-dom";
import "./projects.css"
import ImgCollection from "../../components/imgCollection/ImgCollection"

export default function Projects() {
    return (
        <div className="background">
            <div className="topText">Projects</div>
            <div className="projects">
                <div className="projectContainer">
                    <div className="imgContainer">
                        <img className="projectImg" src="https://i.imgur.com/fdYO1ON.png"/>4
                    </div>
                    <Link className="link"to="/jdrworld">
                        <div className="projectInfo">JDR.World</div>
                    </Link>
                </div>
                {/*<div className="projectContainer">
                    <div className="imgContainer">
                        <ImgCollection variant="project" imgStyle="projectImg"/>
                    </div>
                    <div className="projectInfo">info</div>
                </div>*/}
                <div className="projectContainer">
                    <div className="imgContainer">
                        <img className="projectImg" src="https://i.imgur.com/xF6W8wO.png"/>4
                    </div>
                    <a href="https://jdreactblog.netlify.app/" className="link"to="https://jdreactblog.netlify.app/">
                        <div className="projectInfo">Hosting an Example Project</div>
                    </a>
                </div>
            </div>
        </div>
    )
}
