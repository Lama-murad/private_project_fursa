import { Link } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './addOffer.scss';
import { useState, useEffect  } from 'react';
import axios from 'axios';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AdminHeader from '../../components/adminHeader/adminHeader';

function AddOffer(){
  const [offers, setOffers] = useState([])

  useEffect(()=>{

    //fetch courses
  fetch('/offers/get-all-offers')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setOffers(data.offers);
    }).catch(err=>{
      console.error(err);
    })
  },[])

  function handleDelete(event:any){
    event.preventDefault();
    const id=event.target.value;
    axios.delete(`http://localhost:3004/courses/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  function addOffer(ev: any) {
    ev.preventDefault();
    const form = ev.target;
   console.log({form})
    axios.post('/offers/add-new-offer', { name: form[0].value, description: form[1].value, cost: form[2].value})
      .then(data => {
        console.log(data);
        alert("offer is added successfully")
      }).catch(err => {
        console.error(err);
      })
  }


    return(
        <div className="addOffer">
          <AdminHeader/>
        <h3>add new offer</h3>
            <form className='formAddOffer' onSubmit={addOffer}>
          <input type="text" placeholder='insert offer name' name='offerName' />
          <input type="text" name="cost" placeholder='insert offer"s description' />
          <input type="number" name="participants" placeholder='insert offer"s cost' />
          <Button className='addbtn'  type="submit">Add</Button>
        </form>
        {/* <h1>courses</h1> */}
        {/* {offers.map((offer: any) => {
          return <p key={offer._id}>{offer.name}</p>
        })} */}
            <div className='tablediv'>
     <table className="table table-striped">
                <thead>
                    <tr>
                    {/* <th>Id</th> */}
                    <th>Name</th>
                    <th>description</th>
                    <th>cost</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                 
              {offers.map((info:any,index)=>{
              return(
                  <tr key={index}>
                      {/* <td>{info.id}</td> */}
                      <td>{info.name}</td>
                      <td>{info.description}</td>
                      <td>{info.cost}</td>
                      <td>
     
    <DeleteOutlinedIcon onClick={handleDelete}/>
                        </td>
                  </tr>
              )
          }
          
      )}
                    
                </tbody>
            </table>
     </div>

</div>
        
    );

}

export default AddOffer;