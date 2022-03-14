import React, { useContext, useState } from "react";

import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [race, setRace] = useState("");

  const saveInfo = () => {
    var data = new FormData();
    data.append("file", image[0]);
    data.append("name", name);
    data.append("race", race);

    fetch(
      "https://3001-4geeksacademy-reactflask-5x407zk5u6o.ws-eu34.gitpod.io/api" +
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
            setImage(event.target.value);
          }}
        />
        <input type="button" value="Save" onClick={saveInfo} />
      </form>
    </div>
  );
};
