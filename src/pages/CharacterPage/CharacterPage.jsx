import { useEffect, useState } from "react"
import axios from "axios"
import s from "./CharacterPage.module.css"

export const CharacterPage = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {
            setCharacters(res.data.results)
        })
    }, [])

    return (
        <div>
            <h1 className={"pageTitle"}>CharacterPage</h1>
            <div>{characters[0].name}</div>
        </div>
    )
}