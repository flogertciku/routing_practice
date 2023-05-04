import React ,{ useEffect, useState }from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const PokemonList = (props) =>{
    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0')
            .then(response=>{setPokemonList(response.data.results)})
        
    }, []);



    return(
        <>
        {
            pokemonList.map((pokemon,index)=>(
                <Link  key={index} to={`/pokemon/${pokemon.name}`} >   <h2>{pokemon.name}</h2></Link>

            ))
        }
        
        </>
    )
}

export default PokemonList;