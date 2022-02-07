/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import ThemeContext from './context/theme.contex'
import mimikyu from './themes/mimikyu.theme'
import Itheme from './interfaces/theme.interface'
import { Details, Home, Pokedex, Settings } from '@views';
import {Container} from '@components';
import { ThemeProvider } from 'styled-components';
import { initial } from '@themes';
import { getItem, setItem } from '@helpers';



const  App = () => {
  const [theme, setTheme] = useState<Itheme>(initial)

  const proivider = {theme, setTheme}

    if(!getItem('@favorites')){
      setItem('@favorites', "[]")
    }

  return (
    // @ts-ignore
    <ThemeContext.Provider value={proivider}>
    <ThemeProvider theme={theme}>
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Container>
    </ThemeProvider>
   
  </ThemeContext.Provider> 
  )
}


export default App
