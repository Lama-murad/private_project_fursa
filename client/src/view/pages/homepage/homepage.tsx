
import './homepage.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
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
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

interface horse {
  name: string;
  age: number;
  img: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Homepage() {
  const [courses, setCourses] = useState([]);
  const [offer, setOffers] = useState([]);
   const offers = useAppSelector(selectOffers)
  const trainers = useAppSelector(selectrainers)
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    //fetch courses using mongo
    fetch('/offers/get-all-offers')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setOffers(data.offers);
    }).catch(err=>{
      console.error(err);
    })
  },[])

  function handleGetOffers() {
    dispatch(getOfferAsync());

  }

  return (
    <div className='maindivHP'>
      <Header></Header>

      <div className='animation'> </div>
      <div className='bodyDiv'>
        <Courses />
        <button className='offerBtn' onClick={handleOpen}><Icon icon="ooui:special-pages-ltr" width="25" height="25" /></button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {offer.map((offer:any, index:any) => (
        <><Typography id="keep-mounted-modal-title" variant="h6" component="h2" >
              {offer.name}
            </Typography><Typography id="keep-mounted-modal-description" sx={{ mt: 2 }} >
                {offer.description}
              </Typography><Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                cost: {offer.cost}
              </Typography></>
               )) }
        </Box>
      </Modal>
      </div>
    </div>
//  <OffersCard key={index} name={offer.name} description={offer.description} cost={offer.cost}></OffersCard>
//  <div className="offersCard">
        
// <div className='txt'>
//     {offer.name}
//     <div>{offer.description}</div>
   
// <div> cost: {offer.cost}</div>  
// </div>
// </div> 


  );
}

export default Homepage;