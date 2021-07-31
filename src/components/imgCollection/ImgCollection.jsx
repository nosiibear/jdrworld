import React from 'react'
import "./imgcollection.css"

export default function ImgCollection(props) {
    return (
        <div className="collectionContainer">
            {props.variant === "project" ? (
                <img src="https://res.cloudinary.com/beanboy/image/upload/v1626718138/reactblog/post_image_placeholder_vytptl.jpg" className={props.imgStyle}/>
            ) : (
                props.images.map((c, idx) => (
                    <img src={c}
                         className={props.imgStyle}
                         />
                ))
            )}
        </div>
    )
}
