import React from "react";
import { useParams,Link, useNavigate } from "react-router-dom";

const About =()=>{
    const { name,lastName } = useParams();
    const navigate = useNavigate();
    return(
        <>
        <Link to={"/"}>Go to Home </Link>
        <h2>About Page</h2>

        {   
            isNaN(name) ? <h3>your Name is {name} and ur last name is {lastName}</h3> :
            <h3> your age is : {name}</h3>
        }
        
        
        </>
    )
}
export default About;