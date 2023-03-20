import React from 'react'
import { Link } from "react-router-dom"
import SingleBlogPage from './SingleBlogPage'



const DetailPage = () => {
    const mystyle = {
        color: "red",
        backgroundColor: "yellow",
        borderRadius: "8px"
    }

    return (
        <div className='main'>
        <SingleBlogPage/>
        <Link to="/"> <button style={mystyle} >Go Home</button> </Link>
        </div>
    )
}

export default DetailPage;