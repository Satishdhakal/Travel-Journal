import React from "react"
import Header from "./Components/Header"
import Cards from "./Components/Cards"
import "./style.css"
import data from "./data.js"

export default function App(){

  const cards = data.map((item)=>{
    return(
      <Cards key={item.id} {...item}/>
      ) 
  });


  return(
    <div className="app">
      <Header />
      <section>{cards}</section>
    
     
    </div>
  )
}