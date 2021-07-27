import "./post.css";
import { Link } from "react-router-dom"

export default function Post({post}) {
    return (
        <div className="post">
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c)=> (
                        <span className="postCat">{c}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
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
            {/* commenting this because I think just the title + image looks better
            <p className="postDesc">
                {post.desc}
                </p>
            */}
        </div>
    )
}
