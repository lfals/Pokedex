import React, { useEffect, useState } from 'react';
import {  Header, PokedexCard } from '@components';
import { getItem } from '@helpers';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

function Pokedex() {
  const [item, setDataItem] = useState([])
  const [data, setData] = useState([{
     subject: "",
    A: 1,
  }])
        // @ts-ignore
  const pokeData = JSON.parse(getItem("@favorites"))

  useEffect(() => {
        // @ts-ignore
    treatData(JSON.parse(getItem("@favorites")))
  },[])

  const treatData = (favorites: any[]) => {
    const newData: ((prevState: { subject: string; A: number; }[]) => { subject: string; A: number; }[]) | { A: number; }[] = []
    favorites.map((favorite: { pokemon: { types: any[]; }; }) => {
      favorite.pokemon.types.map((typeArray: { type: { name: any; }; }) => {
        // @ts-ignore
        if(newData.findIndex((findData) => findData.subject == typeArray.type.name) == -1){
        // @ts-ignore
          newData.push({subject: typeArray.type.name, A: 1})
        }else{
        // @ts-ignore
          const index = newData.findIndex(obj => obj.subject == typeArray.type.name)
          newData[index].A = newData[index].A + 1
        }
        
        
      })
    } )
        // @ts-ignore
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
