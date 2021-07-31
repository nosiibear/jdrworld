import "./post.css";
import { Link } from "react-router-dom"
import Icon from "../icon/Icon"

export default function Post({post}) {
    return (
        <div className="post">
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c, idx)=> (
                        <span className="postCat">{idx > 0 && " • "}{c}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <div className="horizontalContainer">
                    <p className="postUsernameContainer">
                        <Icon size="16px"/>
                        <div className="postUsername">{post.username}</div>
                    </p>
                    <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="postDesc">{post.blurb}</p>
            </div>
            <Link to={`/post/${post._id}`} className="postImgContainer link">
            {
            post.photo ? (
                <img
                    className="postImg"
                    src = {post.photo}
                    alt=""
                />
            ) : (
                <img
                    className="postImg"
                    src = "https://res.cloudinary.com/beanboy/image/upload/v1626718138/reactblog/post_image_placeholder_vytptl.jpg"
                    alt=""
                />
            )}
            </Link>
        </div>
    )
}
