import React, { useState } from 'react'
import './App.css'

function List() {

    const [list, setlist]=useState(["Red","Black"])
    function orange(){
        setlist([...list,"Orange"])
    }
    function green(){
        setlist([...list,"Green"])
    }
    function remove(){
        const re=list.pop()
        setlist([...list])
        let ele=document.createElement("div")
        const a=document.getElementById("ad")
        ele.append(re)
        a.append(ele)
    }
  return (
    <div>
        <div id="main">
        <div>
            <center>
        <button onClick={orange}>Add orange</button> &nbsp; &nbsp;
        <button onClick={green}>Add Green</button> &nbsp; &nbsp;
        <button onClick={remove}>Remove</button>
        {list.map((x,index)=><li key={index}>{x}</li>)}
        </center>
        </div>
        <div>
            <center>
            <h2>Removed Colors</h2>
            <div id="ad"></div>
            </center>
        </div>
        </div>
    </div>
  )
}

export default List
