import React, { useState } from 'react'
import './App.css'

function List() {

    const [list, setlist]=useState(["Virat Kohli","Jasprit Bumrah","M.S.Dhoni"])
    const [undo, setundo]=useState(false)
    const [rem, setrem]=useState("")

    function green(){
        var a=document.getElementById('inp').value
        if(a===""){
            alert("Write Something")
        }
        else{
        setlist([...list,a])
        let b=document.getElementById('inp')
        b.value=""}
    }
    function remove(){
        const re=list.pop()
        setlist([...list])
        let ele=document.createElement("div")
        const a=document.getElementById("ad")
        ele.innerHTML="you just now deleted: "+re
        a.append(ele)
        setrem(re)
        setundo(true)
        setTimeout(()=>{setundo(false)},4000)
    }
    function restore(){
        let d=document.getElementById("ad")
        d.remove(rem)
        setlist([...list,rem])
        setrem("")
        setundo(false)
    }
  return (
    <div>
        <h1>Cricket Players</h1>
        <div id="main">
        <div>
            <center>
        <input type='text' placeholder='Enter a player name' id='inp'></input><br/>
        <button onClick={green}>Add </button> &nbsp; &nbsp;
        <button onClick={remove}>Del</button>
        {list.map((x,index)=><li key={index}>{x}</li>)}
        </center>
        </div>
        <div>
            <center>
            <h2>Removed Elements </h2>
            <div id="ad"></div>
            {undo && (<button onClick={restore} style={{ marginTop:'10px'}}>Undo</button>)}
            </center>
        </div>
        </div>
        <hr/>
    </div>
  )
}

export default List