import React, { useState, useEffect } from 'react'
import MDX from "@mdx-js/runtime"
import Test from "./Test";
import "./writetest.css";

export default function Write() {
    const Content = "# Hello MDX\nThis is a paragraph.\n<Test/>";
    const [dynamicContent, setDynamicContent] = useState("# Hello MDX\nThis is a paragraph.\n<Test/>");

    const components = {
        h1: (props) => <h1 {...props} className="text-xl font-light" />,
        Test: Test
    };
    return (
    <div className="back">
        {/*<Layout>{Content}</Layout>*/}
        <MDX components={components}>{dynamicContent}</MDX>
        <br/>
        <br/>
        <textarea placeholder="meme" type="text" placeholder={Content} onChange={e=> setDynamicContent(Date.now())}></textarea>
    </div>
    );
}
