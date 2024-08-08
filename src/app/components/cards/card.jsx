"use client"
import { useRouter } from "next/navigation"
import style from "./card.module.css"
import { useEffect } from "react"
export default function Cards({data}) {

   const removeTask = async (id)=> {
     const req = await fetch(`/api/addTask/${id}`,{method:"delete", cache: 'no-store' });
     const data = await req.json();
     console.log(data)
     if (data.message == "ok") {      
            // const doomElement = document.querySelector(`div[key="${id}"]`);
            // doomElement.style.display = "none";
            location.reload()
        
          
     }
   }
    return(
        <div className={style.container}>
        {data.map(element => {
          return (
          <div key={element.id} className={style.task}>
            <p>{element.id}</p>
            <h3>{element.name.length >= 10 ? element.name.substring(0,9).concat("...") : element.name}</h3>
            <p>{element.content.length >= 20 ? element.content.substring(0,19).concat("...") : element.content}</p>
            <p className={style.state}>{element.estate}</p>
            <button className={style.button} onClick={()=> {removeTask(element.id)}}>remove</button>
          </div>)
        })}
      </div>
    )
}