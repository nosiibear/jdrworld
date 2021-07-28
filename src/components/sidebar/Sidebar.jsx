import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "./sidebar.css"

export default function Sidebar() {

    const [cats,setCats] = useState([]);
    const [years,setYears] = useState([]);

    useEffect(()=> {
        const getData = async ()=>
        {
            const res = await axios.get("https://brahma-restapi.herokuapp.com/api/data/categories");
            filterData(res.data);
        };
        getData();
    },[])

    const filterData = (data) => {
        Object.keys(data).map(function(keyName, keyIndex) {
            if(typeof data[keyName] === "number" && keyName !== "__v") {
                addCat({keyName: keyName, valueName: data[keyName]});
                console.log(keyName);
            }
        })
    }

    const addCat = (obj) => {
        console.log("object");
        console.log(obj);
    }

    return (
        <div className="sidebar">
            <div className="sidebarContainer">
                <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        {/*cats.map((c) => (
                            <Link to={`/?cat=${c.name}`} className="link">
                                <li className="sidebarListItem">{c.name}</li>
                            </Link>
                        ))*/}
                        {}
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">ABOUT ME</span>
                    <img
                        src="https://www.seguetech.com/wp-content/uploads/2014/08/segue-blog-stock-photos-vs-real-photos.png"
                        alt=""
                    />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quasi inventore explicabo, nihil, ratione perferendis ipsum itaque nemo possimus modi, exercitationem quae? Id praesentium, deserunt fuga optio cumque delectus dignissimos!
                    </p>
                </div>
            </div>
        </div>
    )
}
