import React, { useState } from 'react';
import './Home.css'
import i18n from '../../util/i18n';

function Home() {
const usersCount=15;



  return (
    <div>
      <h1>{i18n( "welcomeMessage")}</h1>

      <p>{i18n("normalMessage")}</p>

      <h3>{i18n("greetingMessage")}</h3>

      <select defaultValue={localStorage.getItem('language')}
       onChange={(e)=>{
         localStorage.setItem('language',e.target.value);
         window.location.reload();
      }}>
        <option value="mr">Marathi</option>
        <option value="hn">Hindi</option>
        <option value="en">English</option>
      </select>
      <p>{i18n("userStatMessage", "<studentCount>", usersCount)}</p>
    </div>
  )
}

export default Home
