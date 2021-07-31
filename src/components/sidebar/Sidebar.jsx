import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "./sidebar.css"

export default function Sidebar() {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [cats,setCats] = useState([]);
    const [years,setYears] = useState([]);
    const [dumbassLoopObject, setDumbassLoopObject] = useState([]);
    const [dumbassLoopObject2, setDumbassLoopObject2] = useState([]);
    const [dumberasserLoopObject, setDumberasserLoopObject] = useState([]);
    const [dumberasserLoopObject2, setDumberasserLoopObject2] = useState([]);

    useEffect(()=> {
        const getData = async ()=>
        {
            const res = await axios.get("https://brahma-restapi.herokuapp.com/api/categories");
            filterData(res.data);
        };
        getData();
    },[])

    /*const filterData = (data) => {
        let localCats = {"data": "data"};
        let localYears = {"data": "data"};
        Object.keys(data).map((keyName, keyIndex) => {
            if(keyName !== "__v") {
                if(typeof data[keyName] === "number") {
                    cats[keyName] = data[keyName];
                }
                else if(typeof data[keyName] !== "string") {
                    years[keyName] = data[keyName];
                }
            }
        })
        setCats(localCats);
        console.log(cats);
        setYears(localYears);
        console.log(years);
        setDumbassLoopObject(Object.keys(cats));
        setDumbassLoopObject2(Object.values(cats)); 
        console.log(dumbassLoopObject);
        console.log(dumbassLoopObject2);
        setDumberasserLoopObject(Object.keys(years));
        setDumberasserLoopObject2(Object.values(years));
        console.log(dumberasserLoopObject);
        console.log(dumberasserLoopObject2);
    } */

    const filterData = (data) => {
        let localCats = [];
        let localYears = [];
        data.map((c) => {
            if(c.months.length > 0) {
                localYears.push(c);
            }
            else {
                localCats.push(c);
            }
        })
        console.log("localCats");
        /*console.log(typeof localCats);
        console.log(typeof cats);
        console.log(Array.isArray(localCats));
        console.log(Array.isArray(cats));*/
        console.log(localCats);
        setCats(localCats);
        console.log("localYears");
        console.log(localYears);
        setYears(localYears);
    }

    return (
        <div className="sidebar">
            <div className="sidebarContainer">
                <div className="sidebarItem">
                    <span className="sidebarTitle">Categories</span>
                    <ul className="sidebarList">
                        {cats.map((c, idx) => (
                            <Link to={`/blog/?cat=${c.name}`} className="link">
                                <li className="sidebarCategory">{c.count > 0 && c.name + " " + c.count} </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">Archive</span>
                    <ul className="sidebarList">
                        {years.map((c, idx) => (
                            <li className="sidebarListItem">
                                {c.name}
                                {c.months.map((d, idx2) => (
                                    <Link to={`/blog/?yr=${c.name}&mo=${idx2}`} className="link">
                                        <li className="sidebarListItem">{d > 0 && months[idx2] + " " + d}</li>
                                    </Link>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
