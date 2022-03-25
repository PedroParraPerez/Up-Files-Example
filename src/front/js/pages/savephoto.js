import React, { useContext, useState, useEffect } from "react";

import { Context } from "../store/appContext";

import "../../styles/home.css";


export const Save_photo = () => {

  const { store, actions } = useContext(Context);

  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [photo, setPhoto] = useState([])



  const saveInfo = () => {
    var data = new FormData();
    data.append("file", image[0]);
    // data.append("name", name);
    // data.append("race", race);

    fetch(
      "https://3001-pedroparraperez-upfilese-h7o8jjichpj.ws-eu38.gitpod.io/api" +
        "/upload-image",
      {
        method: "POST",
        body: data,
      }
    );
  };


  const getInfo = async () => {
    const response = await fetch("https://3001-pedroparraperez-upfilese-h7o8jjichpj.ws-eu38.gitpod.io/api" +
    "/get-image",);
    const data = await response.json();
    console.log(data)
    setPhoto( data.results );
  };

  return (
    <div className="text-center mt-5">
      <h1>Guardar imagenes</h1>

      <form className="form">
        {/* <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(event) => {
            setName({
              ...name,
              [event.target.name]: event.target.value,
            });
          }}
        />
        <br />
        <input
          type="text"
          name="race"
          placeholder="Race"
          onChange={(event) => {
            setRace({
              ...race,
              [event.target.name]: event.target.value,
            });
          }}
        />
        <br /> */}
        <input
          type="file"
          name="file"
          onChange={(event) => {
            setImage(event.target.files);
          }}
        />
        <input type="button" value="Guardar imagen" onClick={saveInfo} /><br/>
      </form>
<br/>
<br/>
<br/>
<br/>
<br/>
      <h1>Mostrar imagenes</h1>
      <input type="button" value="Mostrar imagenes" onClick={getInfo} />
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
