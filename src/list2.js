import React, { useState } from 'react'
import './App.css'

function List() {

    const [list, setlist]=useState(["Red","Black"])
    const [undo, setundo]=useState(false)
    const [rem, setrem]=useState("")

    function green(){
        const aaa=document.getElementById('inpp').value
        if(aaa===""){
            alert("Write a Color")
        }
        else{
        setlist([...list,aaa])
        let bbb=document.getElementById('inpp')
        bbb.value=""}
    }
    function remove(){
        const re=list.pop()
        setlist([...list])
        let ele=document.createElement("div")
        const a=document.getElementById("addd")
        ele.innerHTML="you just now deleted: "+re
        a.append(ele)
        setrem(re)
        setundo(true)
        setTimeout(()=>{setundo(false)},4000)
    }
    function restore(){
        let d=document.getElementById("addd")
        d.remove(rem)
        setlist([...list,rem])
        setrem("")
        setundo(false)
    }
  return (
    <div>
        <h1>For Colors</h1>
        <div id="main">
        <div>
            <center>
        <input type='text' placeholder='Enter a color' id='inpp'></input><br/>
        <button onClick={green}>Add </button> &nbsp; &nbsp;
        <button onClick={remove}>Del</button>
        {list.map((x,index)=><li key={index}>{x}</li>)}
        </center>
        </div>
        <div>
            <center>
            <h2>Removed Colors</h2>
            <div id="addd"></div>
            {undo && (<button onClick={restore} style={{ marginTop:'10px'}}>Undo</button>)}
            </center>
        </div>
        </div>
    </div>
  )
}

export default List
