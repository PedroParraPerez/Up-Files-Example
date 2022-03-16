import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";


import "../../styles/home.css";


export const Get_photos = () => {

  const { store, actions } = useContext(Context);
  const [photo, setPhoto] = useState([])


    const getInfo = async () => {
      const response = await fetch("https://3001-pedroparraperez-upfilese-a19funsg7bh.ws-eu34.gitpod.io/api" +
      "/get-image",);
      const data = await response.json();
      console.log(data)
      setPhoto( data.results );
    };
 

 

  return (
    <div className="text-center mt-5">
      <h1>Listado de perritos</h1>
      <input type="button" value="GetInfo" onClick={getInfo} />
      <div className="row">
        <div className="col-xl-12 d-flex mt-2 listcard">
        {photo.map((photo) => {
        return (
          <div key={photo.id} className="card text-center mt-5 bg-primary">
            <img src={photo.image} />
            <p>Name:</p>
            <p>Race:</p>
          </div>
        );
      })}




        </div>
      </div>
      
    </div>
  );
};
