import React from "react"

const getItem = (token:string) => localStorage.getItem(token)

const setItem = (token: string, data) => localStorage.setItem(token ,data)


export {
    getItem,
    setItem

}