import { Header } from "@components";
import React, { useContext } from "react";
import styled from "styled-components";
import { furret, initial, mimikyu, oddish } from '@themes'
import { ThemeContext } from "@context";


const Settings = () => {
    const {...context} = useContext<any>(ThemeContext)

    console.log(context);

    const changeTheme = (name) => {
        context.setTheme(name)
    }
    

    return(
            <>
                <Header title="Settings" />
                <h1>Change theme</h1>
                <p>Selected Theme: {context.theme.name}</p>
                <Card color={furret.primary} onClick={() => changeTheme(furret)}>
                    <img src={furret.background} />
                    <h1>{furret.name}</h1>
                </Card>
                
                <Card color={mimikyu.primary} onClick={() => changeTheme(mimikyu)}>
                    <img src={mimikyu.background} />
                    <h1>{mimikyu.name}</h1>
                </Card>
                
                <Card color={oddish.primary} onClick={() => changeTheme(oddish)}>
                    <img src={oddish.background} />
                    <h1>{oddish.name}</h1>
                </Card>

                <Card color={initial.primary} onClick={() => changeTheme(initial)}>
                    <h1>Sem tema</h1>
                </Card>
            </>
    )
}

export default Settings

const Card = styled.button`
    display: flex;

    width: 100%;
   border: 1px solid black;
   border-radius: 16px;
   margin-top: 20px;
    height: 100px;
  background-color: ${props => props.color};
  color: white;
  &:active{
      background-color: ${props => props.theme.secondary};
  }
   img{
        width: 120px;
        margin-right: 20px;
   }

`