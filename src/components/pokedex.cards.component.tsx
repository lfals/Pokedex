import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css'
import { ClipLoader } from 'react-spinners';
import { Ipokemon } from '@interfaces';
import { Link } from 'react-router-dom';
import { url } from 'inspector';
import { getTypeColor } from '@helpers';



function PokedexCard(props:any) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
      console.log("useEffect");
      
  },[props.data])

  const checkData = () => {
    if(props.data.length > 0){
      setIsLoading(false)
    }
  }

  if(isLoading) {
    console.log("do card", props.data);
    checkData()
  }


  return (
    <>
      {isLoading ? <ClipLoader /> : (
        props.data.map((pokemon: Ipokemon, i: string)=> {
          console.log();
          
          return(
                <CardContainer key={i} to={`/details/${pokemon.pokemon.name}`} style={{backgroundColor: pokemon.color}} >
                  <img  src={pokemon.pokemon.sprites.front_default} />
                  <h1>{pokemon.pokemon.name}</h1>
                  {
                    pokemon.pokemon.types.map((type: {type: {name: string}}, i: number) => {
                      return(
                        <TypeName key={i} style={{backgroundColor: getTypeColor(type.type.name)}}>{type.type.name}</TypeName>
                      )
                    })
                  //   data.pokemon.types.map((type:{type: {name: string}}, i:string) => {
                  //     return(
                  //         <TypeName key={i} style={{backgroundColor: getTypeColor(type.type.name)}}>{type.type.name}</TypeName>
                  //     )
                      
                  // })
                  }
                </CardContainer>
              )
        })
      )}
    </>
  );
}

export default PokedexCard;

const CardContainer = styled(Link)`
background-color: ${props => props.theme.secondary};
margin-top: 25px;
border-radius: 16px;
text-decoration: none;
display: flex;
align-items: center;
color: white;
    display: flex;
    img {
      width: 105px;
      height: 105px;
      margin-left: 5px;
    }
    h1{
      margin-left: 1vw;
      
    }

    @media (max-width: 769px) {
      h1{
        font-size: 24px;
      }
        
    }


`;


const TypeName = styled.p`
    padding: 6px 12px;
    font-size: 18px;
    margin-right: 20px;
    border-radius: 16px;
    color: white;
    font-weight: bold;
    margin-left: 20px;
`