import React from "react"

const getItem = (token:string) => localStorage.getItem(token)

const setItem = (token: string, data: string) => localStorage.setItem(token ,data)


export {
    getItem,
    setItem

}