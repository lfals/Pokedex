import { createContext } from "react"
import Itheme from "../interfaces/theme.interface"
import oddish from "../themes/oddish.theme"


  
const ThemeContext = createContext<Itheme>(oddish)

export default ThemeContext
