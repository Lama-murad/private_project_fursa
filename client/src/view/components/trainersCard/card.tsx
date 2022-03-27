import React from 'react'
import Logo from './raise.svg'
import './card.scss'
import { Link } from 'react-router-dom';

interface cardProp {
    name: string;
    image: string;
    age:number;
    level:number;
    desc: string;
}

function Card(prop: cardProp) {
    return (
        <div className="MainCard">
            <img className='imgMainCard' src={prop.image}></img>
            <div className='imgMaintxt'>
            <div> name:  {prop.name}</div> 
           
            <div>age: {prop.age}</div> 
        
            <div>level: {prop.level}</div> 
           
            <div>{prop.desc}</div> 
            </div>
        </div>

    )
}
export default Card;