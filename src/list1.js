import React, { useState } from 'react'
import './App.css'

function List1() {

    const [list, setlist]=useState(["Ram Setu","Godavari","Mirchi"])
    const [undo, setundo]=useState(false)
    const [rem, setrem]=useState("")

    function green(){
        var aa=document.getElementById('inp1').value
        if(aa===""){
            alert("If you can't remember movies, here is some suggestions for you Bahubali, Sita Ramam, Virupaksha, Fidaa, Hanuman, MAD, Amaran")
        }else{
        setlist([...list,aa])
        let bb=document.getElementById('inp1')
        bb.value=""
    }
    }
    function remove1(){
        const re=list.pop()
        setlist([...list])
        setrem(re)
        setundo(true)
        setTimeout(()=>{setundo(false)},4000)
    }
    function restore(){
        if(rem!==null){
        setlist([...list,rem])
        setrem("")
        setundo(false)}
    }
    
  return (
    <div>
        <h1>List of Movies</h1>
        <div id="main">
        <div>
            <center>
        <input type='text' placeholder='Enter a movie name' id='inp1'></input><br/>
        <div id="para"></div>
        <button onClick={green}>Add </button> &nbsp; &nbsp;
        <button onClick={remove1}>Del</button>
        {list.map((x,index)=><li key={index}>{x}</li>)}
        </center>
        </div>
        <div>
            <center>
            <h2>Deleted Movies</h2>
            {rem && <div id="add">you just deleted: {rem}</div>}
            {undo && (<button onClick={restore} style={{ marginTop:'10px'}}>Undo</button>)}
            </center>
        </div>
        </div>
        <hr/>
    </div>
  )
}

export default List1
