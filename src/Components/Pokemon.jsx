import React ,{ useEffect, useState }from "react";
import { useParams } from "react-router-dom";

import axios from 'axios';

const Pokemon = (props) =>{
    const [pokemon, setPokemon] = useState({});
    const{pokemonName}=useParams();
    const id = pokemonName
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id }`)
            .then(response=>{
                setPokemon({
                pokemonName: response.data.name,
                img: response.data.sprites.front_default
            })})
        
    }, []);



    return(
        <>
      
         
                <h2 >{pokemon.pokemonName} </h2>
                <img width={"320px"} height={"320px"} src={pokemon.img} alt="" />

        
        
        </>
    )
}

export default Pokemon;