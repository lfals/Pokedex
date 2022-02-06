import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { Header, Input } from '@components';
import { useQuery } from '@apollo/client';
import { POKEMON_LIST } from '@query';
import { ClipLoader } from 'react-spinners';
import Skeleton from 'react-loading-skeleton';
import { getBackgroundColor } from '@helpers';

const Card = lazy(() => import('../../components/cards.component'));

let limit = 0
const newPokeArray: any[] = []

function Home() {
    const [pokemon, setPokemon] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [variables, setVariables] = useState<any>(10)

        const { loading, error, data } = useQuery(POKEMON_LIST, {variables: {
            limit: variables,
            offset: 0,
          }});



    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        getColor()
    }, [loading])

   
    const handleScroll = (e) => {   
      if(limit < 1282){
        if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight ){
          limit+= 5
          setVariables(limit)
      }
      }   
    }

    const getColor = async () => {
      if(data?.pokemons.results.length > 0){
        await data.pokemons.results.map(async(data) => {
         const newPoke =  {
            ...data,
            color: await getBackgroundColor(data.image)
          }
            saveData(newPoke)
          
          
        })
      }
      
    }

    const saveData = (dataToSave) => {
      
      newPokeArray.push(dataToSave)
        setPokemon(newPokeArray)
    }

    const checkData = () => {
      if(pokemon?.length > 0){
        setIsLoading(false)
      }
      
    }


    if(isLoading){
      checkData()
    }


  return (
    <>
      <Header title="Explore pokémons na Pokedéx" />
      <Input placeholder="Digite aqui" />
      {isLoading ? <Skeleton count={7} height={70}/> : (
        <div  id="holder">
          <Suspense fallback={<h1>Loading</h1>}>
          <Card data={pokemon} />
        {loading && <ClipLoader />}

      </Suspense>
        </div>
      )
      }
      
    </>
  );
}

export default Home;
