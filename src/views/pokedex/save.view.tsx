import React, { useEffect, useState } from 'react';
import { Card, Header, PokedexCard } from '@components';
import { getItem } from '@helpers';
import Skeleton from 'react-loading-skeleton';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts'
import { useQuery } from '@apollo/client';
import { POKEMON_LIST } from '@query';

function Pokedex() {
  const [item, setDataItem] = useState([])
  const [data, setData] = useState([{
     subject: "",
    A: 1,
  }])

  const pokeData = JSON.parse(getItem("@favorites"))

  useEffect(() => {
    treatData(JSON.parse(getItem("@favorites")))
  },[])

  const treatData = (favorites: any[]) => {
    const newData: ((prevState: { subject: string; A: number; }[]) => { subject: string; A: number; }[]) | { A: number; }[] = []
    favorites.map((favorite: { pokemon: { types: any[]; }; }) => {
      favorite.pokemon.types.map((typeArray: { type: { name: any; }; }) => {
        if(newData.findIndex(findData => findData.subject == typeArray.type.name) == -1){
          newData.push({subject: typeArray.type.name, A: 1})
        }else{
          const index = newData.findIndex(obj => obj.subject == typeArray.type.name)
          newData[index].A = newData[index].A + 1
        }
        
        
      })
    } )
    setData(newData)   
  }

  console.log(pokeData);
  
  // if(item.length > 0){
  //   if(isLoading){
  //     setIsLoading(false)
  //   }
  // }


  
  return (
<>
  <Header title="Pokedex" settings/>
  
  <RadarChart
    cx={300}
    cy={250}
    outerRadius={150}
    width={500}
    height={500}
    data={data}
  >
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <Radar
      name="Mike"
      dataKey="A"
      stroke="#8884d8"
      fill="#8884d8"
      fillOpacity={0.6}
    />
  </RadarChart>
  <PokedexCard data={pokeData}/>
</>

  );
}
export default Pokedex;
