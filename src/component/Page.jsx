import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './page.css'

const Page = () => {
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        fetchAdvice();
    }, []);
    
    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=> {
            const {advice} = response.data.slip;
            setAdvice(advice);
        })
        .catch((error)=>{
            console.log(error);
        });
    };

    const handleClick = () => {
        fetchAdvice();
    } 

  return (
    <div className = 'app'>
        <div className='card'>
            <h2 className='heading'>{advice}</h2>
            <button className='button' onClick={handleClick}>
                <span> GIVE ME ADVICE </span>
            </button>
        </div>
    </div>
  )
}

export default Page;
