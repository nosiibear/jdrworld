import React, { useState, useEffect } from 'react'
import MDX from "@mdx-js/runtime"
import Test from "./Test";
import "./writetest.css";

export default function Write() {
    const Content = "# Hello MDX\nThis is a paragraph.\n<Test/>";
    const [dynamicContent, setDynamicContent] = useState("# Hello MDX\nThis is a paragraph.\n<Test/>");

    const components = {
        //h1: (props) => <h1 {...props} className="text-xl font-light" />,
        h1: (props) => <h1 {...props} style={{color: "crimson"}} />,
        Test: Test
    };
    return (
    <div className="back">
        {/*<Layout>{Content}</Layout>*/}
        <div className="mdxRenderer">
            <MDX components={components}>{dynamicContent}</MDX>
        </div>
        <br/>
        <br/>
        <div className="mdxCreator">
            {/*Date.now()*/}
            <textarea placeholder="meme" type="text" placeholder={Content} onChange={e=> setDynamicContent(e.target.value)}></textarea>
        </div>
    </div>
    );
}
