import {useEffect, useState} from "react"
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
            {characters.length && (
                <div className={s.character}>
                    <div className={s.characterLink}>{characters[0].name}</div>
                    <img src={characters[0].image} alt={`${characters[0].name} avatar`}/>
                </div>
            )}
        </div>
    )
}