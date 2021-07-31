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
                        <img className="projectImg" src="https://res.cloudinary.com/beanboy/image/upload/v1626718138/reactblog/post_image_placeholder_vytptl.jpg"/>4
                    </div>
                    <Link className="link"to="/jdrworld">
                        <div className="projectInfo">info</div>
                    </Link>
                </div>
                <div className="projectContainer">
                    <div className="imgContainer">
                        <ImgCollection variant="project" imgStyle="projectImg"/>
                    </div>
                    <div className="projectInfo">info</div>
                </div>
                <div className="projectContainer">
                    <div className="projectInfo">info</div>
                </div>
                <div className="projectContainer">
                    <div className="projectInfo">info</div>
                </div>
            </div>
        </div>
    )
}
