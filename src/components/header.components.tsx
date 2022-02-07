import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components";

import { CgPokemon } from "react-icons/cg"
import { Link } from "react-router-dom";
import { AiFillSetting, AiOutlineSetting } from "react-icons/ai";
import { getItem } from "@helpers";

const Header = (props:any) => {
    const [saved, setSaved] = useState(0)
    useEffect(() =>{
        // @ts-ignore
        const oldSaved = JSON.parse(getItem('@favorites'))
        setSaved(oldSaved?.length ? oldSaved.length : 0)
    })

    return(
        <>
            <HeaderContainer >
                <Logo to="/">Pokédex</Logo>
                <LinkToPoke to={props.settings ? '/settings' : '/pokedex' }>
                    {props.settings ? <AiOutlineSetting size={42}/> : (
                        <>
                            <CgPokemon size={42}/>
                            <Badge>{saved}</Badge>
                        </>
                        )}
                </LinkToPoke>
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
margin-top: 50px;

`

const Logo = styled(Link)`
    font-size: 24px;
    text-decoration: none;
    font-weight: bold;
    color: ${props => props.theme.primary};
    
`
const Title = styled.h1`
    color: ${props => props.theme.secondary};
    max-width: 450px;
    font-weight: bold;
    font-size: 48px;

   
`
const Badge = styled.h1`
    background-color: ${props => props.theme.primary};
    font-size: 14px;
    /* padding: 3px 12px; */
    display: flex;
    justify-content: center;
    border-radius: 16px;
    position: relative;
    top: -30px;
    text-decoration: none;
    color: white;

`

const LinkToPoke = styled(Link)`
    color: black;
    text-decoration: none;


`