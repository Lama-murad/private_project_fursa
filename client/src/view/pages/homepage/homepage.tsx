
import './homepage.scss';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Link } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import Courses from "../courses/courses";
import OffersCard from "../../components/offersCard/offers"
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { useState, useEffect } from 'react';
import { selectrainers } from '../../../features/trainerReducer';
import { selectOffers } from '../../../features/offers'
import { getOfferAsync } from '../../../features/offers';
import Header from '../../components/header/header';
import { Icon } from '@iconify/react';

interface horse {
  name: string;
  age: number;
  img: string;
}


function Homepage() {
  const [kitttens, setKittens] = useState([]);
  const [courses, setCourses] = useState([]);
  const offers = useAppSelector(selectOffers)
  const trainers = useAppSelector(selectrainers)
  const dispatch = useAppDispatch();


 

  function handleGetOffers() {
    dispatch(getOfferAsync());

  }

  return (
    <div className='maindivHP'>
      <Header></Header>

      <div className='animation'> </div>
      <div className='bodyDiv'>
        <Courses />
        <button className='offerBtn' onClick={handleGetOffers}><Icon icon="ooui:special-pages-ltr" width="25" height="25" /></button>

        <div className="offersDiv">
          {offers.status !== 'loading' ? offers.arrOffers.map((offer:any, index:any) => {
            // return (<p key={index}>{offer.name}</p> )
            return <OffersCard key={index} name={offer.name} description={offer.description} cost={offer.cost}></OffersCard>
          }) : <div>loading</div>}
        </div>
      </div>
    </div>



  );
}

export default Homepage;