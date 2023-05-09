import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './randomUserID.css'

function RandomUserID() {

    const userName = "Name : ";
    const userEmail = "Email : ";
    const userPhone = "Phone No. : ";

    const[photo, setPhoto] = useState("");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const[phone, setPhone] = useState()
    
    function fetchRandomUser(){
        return(
            axios.get("https://randomuser.me/api/")
            .then((result) => {
                console.log(result.data.results[0]);
                setPhoto(result.data.results[0].picture.large);
                setName(result.data.results[0].name.first+ " " +result.data.results[0].name.last);
                setEmail(result.data.results[0].email);
                setPhone(result.data.results[0].phone);
            }))
    }

    useEffect(
      () => {

        fetchRandomUser();
        
      },[])

  return (
    <>
      <div className='wrepper'>
        <div className='data'>
          <div className='photo'>
            <img src={photo} alt={name}/>
          </div>
          <div className='name'>
            <p>{userName}{name}</p>
            <p>{userEmail}{email}</p>
            <p>{userPhone}{phone}</p>
          </div>
        </div>

        <button type='submit' onClick={fetchRandomUser}>RandomUserID</button>
      </div>
    </>
  )
}

export default RandomUserID


// https://fakestoreapi.com/products


//Git origin => randomData
