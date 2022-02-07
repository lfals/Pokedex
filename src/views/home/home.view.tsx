import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Input } from '@components';
import { useQuery } from '@apollo/client';
import { POKEMON_LIST } from '@query';
import { ClipLoader } from 'react-spinners';
import Skeleton from 'react-loading-skeleton';
import { getBackgroundColor } from '@helpers';
import styled from 'styled-components';

const Card = lazy(() => import('../../components/cards.component'));

let limit = 0
const newPokeArray: any[] = []

function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [pokemons, setPokemons] = useState([])
    const [variables, setVariables] = useState<any>(10)
    const [filter, setFilter] = useState(null)
    const [search, setSearch] = useState("")
    let navigate = useNavigate();
    const { loading, error, data } = useQuery(POKEMON_LIST, {variables: {
        limit: variables,
        offset: 0,
      }});

      useEffect(() => {
        // @ts-ignore
        window.addEventListener('scroll', handleScroll)
      },[])

    const handleScroll = (e: { target: { documentElement: { scrollTop: number; scrollHeight: number; }; }; }) => {   
        if(limit < 1282){
          if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight ){
            limit+= 5
            setVariables(limit)
          }
        }   
    }

    const searchPoke = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      navigate(`details/${search.charAt(0).toLowerCase() + search.slice(1)}`)
    }



  return (
    <>
      <Header title="Explore pokémons na Pokedéx" />
      <Form onSubmit={(e) => searchPoke(e)}>
        <Input placeholder="Digite aqui" onChange={(e) => setSearch(e.target.value)}/>
        <button type='submit'>Buscar</button>
      </Form>
      {loading ? <Skeleton count={7} height={70}/> : (
        <div  id="holder">
          <Suspense fallback={<h1>Loading</h1>}>
          <Card data={data.pokemons.results} />
      </Suspense>
        </div>
      )
      }
      
    </>
  );
}

export default Home;


const Form = styled.form`
display: flex;
justify-content: flex-start;
align-items: center;
  button{
    height: 74px;
    margin: 0;
    border: none;
    border-radius: 0 16px 16px 0;

    width: 150px;
    color: white;
    font-size: 20px;

    background-color: ${props => props.theme.primary};

    &:active {
    background-color: ${props => props.theme.secondary};

    }
  }

`