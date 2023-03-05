import React from "react"
import {GoLocation} from "react-icons/go"


export default function Cards(props){
    return(
        <div className="travelCard">
            <img src= {props.img} className="placeImg" alt="mustang"/>
            <p className="country"><GoLocation className="locationIcon"/><b className="nepal">{props.country}</b> &nbsp;<span className="link"><a href={props.link}>View on Google Maps</a></span></p>
            <h1 className="location">{props.location}</h1>
            <br></br>
            <p className="date"><b>{props.date}</b></p>
            <br></br>
            <div className="divDescription">
                <p className="description">{props.description}</p>
            </div>
        </div>

   
    )
   
}

