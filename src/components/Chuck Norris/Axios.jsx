import React, { useState } from 'react'
import axios from 'axios'
import { ThumbUp, ThumbDownAlt } from '@mui/icons-material';


export default function Axios() {
  
    const [chiste, setChiste] = useState('');
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    
    const obtainChiste = () => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(response => {
                setChiste(response.data.value);
                
            }).catch(error => {
                console.log(error);
            });
    }

    const contadorLike = () => {
        setLike(like + 1);
    }

    const contadorDislike = () => {
        setDislike(dislike + 1);
    }


  return (
    <div>
        <h1>Chuck Norris</h1>
        <h4>{chiste}</h4>
        <div>
            <span><ThumbUp onClick={contadorLike} /></span>
            <span> </span>
            <span>({like})</span>
            <span> </span>
            <span><ThumbDownAlt onClick={contadorDislike} /></span>
            <span> </span>
            <span>({dislike})</span>
        </div>
        <button onClick={obtainChiste}>Obtener chiste</button>
    </div>
  )
}