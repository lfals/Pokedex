import { useQuery } from "@apollo/client"
import { POKEMON } from "@query"
import React, { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { useParams } from "react-router-dom"
import {treatPokemonId} from "@helpers"
import styled from "styled-components"

const Details = () => {
    const { id } = useParams()

    

    const {data, error, loading } = useQuery(POKEMON, {variables: {
        name: id
    }})

    
    console.log(data);
    
    

    return(
        <>
            <DetailsContainer>
                    <NameContainer>
                        <h1>{loading? <Skeleton /> : treatPokemonId(`${data.pokemon.id}`)}</h1>
                        <PokemonName>{id}</PokemonName>
                        <Types>
                            {data.pokemon.types.map((type:{type: {name: string}}, i:string) => {
                                return(
                                    <TypeName key={i}>{type.type.name}</TypeName>
                                )
                                
                            })}
                        </Types>
                    </NameContainer>
                    <div>
                        <img src="../../assets/furret.png" alt="" />
                    </div>
            </DetailsContainer>
        
        </>
    )
}

export default Details


const DetailsContainer = styled.div`
  height: 100vh;

`

const Types = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    

`

const TypeName = styled.p`
    padding: 12px;
    background-color: turquoise;
    font-size: 18px;
`

const PokemonName = styled.p`
    font-size: 48px;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: capitalize;
`

const NameContainer = styled.div`
    width: 80%;
    h1,p{
        margin: 0;
        color: ${props => props.theme.primary};
    }
    h1{
        font-size: 48px;
        font-weight: bold;
        opacity: 0.7;
    }
 
`



const BaseContainer = styled.div`
      display: flex;
    justify-content: center;
    background-color: tomato;
    border-radius: 0 0 50% 50%;
    height: 700px;
`

const HeaderCircle = styled.div`
    min-width: 750px;
    min-height: 750px;
    border-radius: 50%;
    display: inline-block;

    position: absolute;
    z-index: -1;
    top: -375px;
    margin: 0 auto;

`