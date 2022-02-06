import React, { useContext } from "react"
import styled from "styled-components";

import { CgPokemon } from "react-icons/cg"

const Header = (props:any) => {


    return(
        <>
            <HeaderContainer >
                <h1>Pokédex</h1>
                <CgPokemon size={42}/>
            </HeaderContainer>
            <Title>{props.title}</Title>
        </>
    )
}

export default Header


const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
h1 {
        color: ${props => props.theme.primary};
    }
`
const Title = styled.h1`
    color: ${props => props.theme.secondary};
    max-width: 450px;
    font-weight: bold;
    font-size: 48px;

   
`