import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound(){
    return(
        <>
        <h1>Sorry,the Page you are Looking for is not found</h1>
        <Link to="/">Back to Home</Link>
        </>
    )
}