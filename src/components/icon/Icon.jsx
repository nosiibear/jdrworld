import React from 'react'
import "./icon.css"

export default function Icon(props) {
    return (
        <div class="cubeContainer" style={{"--cubeSize": props.size}}>
            <div class="cube">
                <div class="face front"></div>
                {/*<div class="face right"></div>
                <div class="face back"></div>*/}
                <div class="face left"></div>
                {/*<div class="face top"></div>*/}
                <div class="face bottom"></div>
            </div>
        </div>
    )
}
