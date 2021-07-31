import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./blog.css"
import axios from "axios"
    
export default function Blog() {
    const [posts,setPosts] = useState([]);
    const {search} = useLocation()
    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("https://brahma-restapi.herokuapp.com/api/posts"+search) 
            setPosts(res.data);
        }
        fetchPosts();
    },[search]);
    
    return (
        <>
            <div className="blog">
                <Sidebar/>
                <Posts posts={posts}/>
            </div>
        </>
    )
}