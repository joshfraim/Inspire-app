import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
        <h1>{advice}</h1>
        <button onClick={handleClick}>give me advice</button>
    </div>
  )
}

export default Page;