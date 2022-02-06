import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css'
import { ClipLoader } from 'react-spinners';
import { Ipokemon } from '@interfaces';
import { Link } from 'react-router-dom';
import { url } from 'inspector';



function Card(props:any) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{

  },[props.data])

  const checkData = () => {
    if(props.data.length > 0){
      setIsLoading(false)
    }
  }

  if(isLoading) {
    checkData()
  }


  return (
    <>
      {isLoading ? <ClipLoader /> : (
        props.data.map((pokemon: Ipokemon, i: string)=> {
          return(
                <CardContainer key={i} to={`/details/${pokemon.name}`} style={{backgroundColor: pokemon.color}} >
                  <img  src={pokemon.image} />
                  <h1>{pokemon.name}</h1>
                </CardContainer>
              )
        })
      )}
    </>
  );
}

export default Card;

const CardContainer = styled(Link)`
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
