import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function Vandetail(){
     const param =useParams()
     const [van,setVan]=useState(null)
     // useParams() extracts an object matching your route setup
    // If the URL is "/vans/3", params is { id: "3" }
     console.log(param)
     React.useEffect(()=>{
        fetch(`/api/vans/${param.id}`)
        .then(res =>res.json())
        .then(data=>setVan(data.vans))

     },[param.id])

     return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img alt={van.name} src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
    }