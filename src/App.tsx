import { useContext, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import ThemeContext from './context/theme.contex'
import mimikyu from './themes/mimikyu.theme'
import Itheme from './interfaces/theme.interface'
import { Details, Home, Save } from '@views';
import {Container} from '@components';
import { ThemeProvider } from 'styled-components';



const  App = () => {
  const [theme, setTheme] = useState<Itheme>(mimikyu)

  const proivider = {theme, setTheme}

  return (
    <ThemeContext.Provider value={proivider}>
    <ThemeProvider theme={theme}>
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/save" element={<Save />} />
      </Routes>
    </Container>
    </ThemeProvider>
   
  </ThemeContext.Provider> 
  )
}


export default App
