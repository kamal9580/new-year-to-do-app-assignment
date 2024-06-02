//in this fiorst we make component like html component that we want   

import { useState } from "react"
import { Todos } from "./Todos";

export function Createtodo(){
    const [title,settitle] =useState("");//we make a local state of title and description
    const[description,setdescription]=useState("");

    return <div>
        
        <input id="title" style={{
            padding:10,
            margin:10
        }}

        type="text" placeholder="title" onChange={function(e){  //onchange means any time the first input changes then take the value of e and give to set title

            const value=e.target.value;
            settitle(value);
            
        }}></input><br/>

        <input id="description" style={{
            padding:10,
            margin:10
        }}
        
         type="text" placeholder="description" onChange={function(e){
            const value=e.target.value;
            setdescription(value);
        }}></input><br/>

        <button style={{
            padding:10,
            margin:10
        }} onclick={()=>{
            fetch("http://localhost:3000"/todos,{ 

                method:"post",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),

                headers:{
                    "contenttytpe":"application/json"
                }
            })

            .then(async function(res){
                const json=await res.json();
                alert("todo added");
            })
        }} > Add a todo </button>
    </div>
} 