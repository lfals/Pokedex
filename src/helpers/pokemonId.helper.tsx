import React from "react"

const treatPokemonId = (data:string) => {
    if(data.length == 1){
        return "#000"+data
    }
    if(data.length == 2){
        return "#00"+data
    }
    if(data.length == 3){
        return "#0"+data
    }
    if(data.length == 4){
        return "#"+data
    }
    
    
}

export default treatPokemonId