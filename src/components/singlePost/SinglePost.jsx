import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom"
import MDX from "@mdx-js/runtime"
import Test from "../../pages/writeTest/Test"
//import { Context } from "../../context/Context";
import "./singlePost.css";
import axios from "axios";
import Icon from "../icon/Icon"

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    //const { user, dispatch } = useContext(Context);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    //const [updateMode, setUpdateMode] = useState(false);

    const components = {
        //h1: (props) => <h1 {...props} className="text-xl font-light" />,
        //h1: (props) => <h1 {...props} style={{color: "crimson"}} />,
        Test: Test,
        //img: (props) => <img {...props} style={{position: "relative", left: "-270px", width: "60vw"}}/>
        img: (props) => <img {...props} style={{maxWidth: "41vw", marginLeft: "-60px", marginTop: "20px", marginBottom: "20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.3)"}}/>
    };
    
    /*useEffect(()=> {
        const refreshUserData = async ()=> {
            // declare variable for user we get back from api
            var userFromId;
            // try/catch block, see if the given id is even valid at all
            try {
                userFromId = await axios.get("/api/users/"+user._id);
            } catch(err){}
            if(!userFromId) {
                dispatch({type: "LOGOUT"});
            } else {
                dispatch({type:"LOGIN_SUCCESS", payload: userFromId.data});
            }
        };
        refreshUserData();
    }, []);*/

    useEffect(()=> {
        const getPost = async ()=>{
            const res = await axios.get("https://brahma-restapi.herokuapp.com/api/posts/"+path)
            console.log(res);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    },[path]);

    /*const handleDelete = async () => {
        try {
            await axios.delete("/api/posts/" + path, {
                data:{username:user.username}
            });
            window.location.replace("/");
        } catch(err){}
    }*/

    /*const handleUpdate = async()=>{
        try {
            await axios.put("/api/posts/" + path, {username:user.username, title:title, desc:desc});
            setUpdateMode(false);
        } catch(err){}
    }*/

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img
                        className="singlePostImg" 
                        // commenting out this line since we're just using the photo's url on its own
                        //src={PF + post.photo}
                        src = {post.photo}
                        alt=""
                    />
                )}
                {   /*updateMode ? (
                        <input type="text"
                        value={title}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e)=>setTitle(e.target.value)}/> 
                    ) : (*/
                        <h1 className="singlePostTitle">
                            {title}
                            {/*post.username === user?.username && (
                                <div className = "singlePostEdit">
                                    <i 
                                        className="singlePostIcon far fa-edit"
                                        onClick = {()=>setUpdateMode(true)}
                                    ></i>
                                    <i 
                                        className="singlePostIcon far fa-trash-alt"
                                        onClick = {handleDelete}
                                    ></i>
                                </div>
                            )*/}
                        </h1>
                    /*)*/
                }
                <span className="singlePostBlurb">{post.blurb}</span>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                    <div style={{marginRight: "10px"}}>Author:</div>
                    <Icon size={"20px"}/>  
                    <Link to={`/?user=${post.username}`} className="link">
                        {post.username}
                    </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {/*updateMode ? (
                    <>
                        <textarea
                            className = "singlePostDescInput"
                            value={desc}
                            onChange={(e)=>setDesc(e.target.value)}
                        />
                        <button className="singlePostButton" onClick={handleUpdate}>
                            Submit
                        </button>
                    </>
                ) : (*/
                    <p className="singlePostDesc">
                        <MDX components={components}>{desc}</MDX>
                    </p>
                /*)*/}
            </div>
        </div>
    )
}
