import { useQuery } from "@apollo/client"
import { POKEMON } from "@query"
import React, { useContext, useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { Link, useParams } from "react-router-dom"
import {getItem, getTypeColor, setItem, treatPokemonId} from "@helpers"
import styled from "styled-components"
import { AiFillHeart, AiOutlineHeart, AiOutlineLeft } from 'react-icons/ai'
import { json } from "stream/consumers"

const Details = () => {
    const [isSave, setIsSave] = useState(false)
    const { id } = useParams()
    const [oldSaved, set] = useState([])
  
    const {data, error, loading } = useQuery(POKEMON, {variables: {
        name: id
    }})

        // @ts-ignore
        const favorites = JSON.parse(getItem('@favorites'))

    const getIndex = () => {
        // @ts-ignore
        return favorites.findIndex((favorite):any => favorite.pokemon.id === data.pokemon.id)
    }

    const isFavorite = () => {
        if(getItem("@favorites")){
            if(getIndex() > -1){
                setIsSave(true)
            }
        }
    }

    const handleFavorite = () => {
        if(!isSave){
            setItem("@favorites", JSON.stringify([...favorites, data]))
            setIsSave(true)
        } else {
            favorites.splice(getIndex(), 1)
           setItem("@favorites", JSON.stringify(favorites))
           setIsSave(false)
        }
    }

    if(!loading) {
        if(!isSave){
            isFavorite()
        }
    }
    
    

    return(
        <>
           {loading ? <Skeleton /> : (
                data.pokemon.id ? (
                    <>
                     <DetailsContainer>
                     <DetailsHeader>
                         <NameContainer>
                             {loading ? <Skeleton /> : (
                                 <Header>
                                 <Back to="/"><AiOutlineLeft />Voltar</Back>
                                 <SaveButton onClick={() => handleFavorite()}>
                                     {isSave ? <AiFillHeart size={24}/> : <><AiOutlineHeart size={24}/></>}
                                 </SaveButton>
                             </Header>
                             )}
                             <h1>{loading? <Skeleton /> : treatPokemonId(`${data.pokemon.id}`)}</h1>
                             <PokemonName>{id}</PokemonName>
                             <Types>
                                 {loading ? <Skeleton height={20} width={200}/> : data.pokemon.types.map((type:{type: {name: string}}, i:string) => {
                                     return(
                                         <TypeName key={i} style={{backgroundColor: getTypeColor(type.type.name)}}>{type.type.name}</TypeName>
                                     )
                                     
                                 })}
                             </Types>
                         </NameContainer>
                         
                     </DetailsHeader>
                     <ImageHolder>
                         {loading ? <Skeleton width={240} height={240}/> : <PokeSprite src={data.pokemon.sprites.front_default} alt="" />}
                     </ImageHolder>
             </DetailsContainer>
             <InformationContainer>
 
             </InformationContainer>
                    </>
         
                 ) : (
                   <>
                     <Header>
                    <Back to="/"><AiOutlineLeft />Voltar</Back>
                    <SaveButton onClick={() => handleFavorite()}>
                        {isSave ? <AiFillHeart size={24}/> : <><AiOutlineHeart size={24}/></>}
                    </SaveButton>
                    </Header>
                    <PokemonName>{id} Pokémon Not Found</PokemonName>
                   </>
                 ) 
            
           )}
        </>
    )
}

export default Details


const DetailsContainer = styled.div`
  height: 100vh;

`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

const Back = styled(Link)`
    text-decoration: none;
    color: black;

`

const Types = styled.div`
    display: flex;
    width: 100%;
`

const SaveButton = styled.button`
    width: 50px;
    height: 50px;

    background: none;
    border: none;

`

const InformationContainer = styled.div`
    
        
`
const DetailsHeader = styled.div`
    display: flex;
        
`
const TypeName = styled.p`
    padding: 6px 12px;
    font-size: 18px;
    margin-right: 20px;
    border-radius: 16px;
    color: white;
    font-weight: bold;
`

const ImageHolder = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

`

const PokeSprite =styled.img`
    width: 240px;
    margin: 0 auto;

`

const PokemonName = styled.p`
        color: ${props => props.theme.primary};

    font-size: 48px;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: capitalize;
        margin: 0;
`

const NameContainer = styled.div`
    width: 80%;
 
    h1{
        color: ${props => props.theme.primary};
        margin: 0;
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