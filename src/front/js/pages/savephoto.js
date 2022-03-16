import React, { useContext, useState, useEffect } from "react";

import { Context } from "../store/appContext";

import "../../styles/home.css";


export const Save_photo = () => {

  const { store, actions } = useContext(Context);

  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [race, setRace] = useState("");


  const saveInfo = () => {
    var data = new FormData();
    data.append("file", image[0]);

    fetch(
      "https://3001-pedroparraperez-upfilese-a19funsg7bh.ws-eu34.gitpod.io/api" +
        "/upload-image",
      {
        method: "POST",
        body: data,
      }
    );
  };
 

  return (
    <div className="text-center mt-5">
      <h1>Listado de perritos</h1>

      <form className="form">
        <input
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
        <br />
        <input
          type="file"
          name="file"
          onChange={(event) => {
            setImage(event.target.files);
          }}
        />
        <input type="button" value="Save" onClick={saveInfo} /><br/>
      </form>
    </div>
  );
};
