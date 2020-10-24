import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './GenerateCharacters.css'

function GenerateCharacter (){

    const [chars, setChars] = useState([])
    const [apis, setApis] = useState('https://rickandmortyapi.com/api/character/')

    let API = 'https://rickandmortyapi.com/api/character/'

      const getData = async (url) => {
          const response = await axios.get(url)
          setChars(response.data.results)    
      }

      useEffect(() => {
          getData(apis);
      }, [apis]) 
    
 
    function clickHandler(){
      console.log('im in')
      let rand =  (Math.floor(Math.random() * (34)));

      let newAPI_URL = API +'?page=' + rand
      setApis(newAPI_URL)   
    }

    return (
      <div>
        <div className="button-container">
          <button className="button-generate" onClick={clickHandler}>Discover new Characters!</button>
        </div>
        <div className="character-container">
          {chars.map( (char) => {
            return (
              <div className="character__item" key={char.id}> 
                <img src={char.image} alt="Rick and morty char"></img>
                <p><strong>Name:</strong> {char.name}</p>
                <p><strong>Status:</strong> {char.status}</p>
                <p><strong>Species:</strong> {char.species}</p>
              </div>
            )
          } )}
        </div>
      </div>
    )

}

export default GenerateCharacter