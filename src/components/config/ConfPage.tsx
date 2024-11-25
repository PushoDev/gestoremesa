import React, { useState } from "react";
import { } from "@ionic/react";


import "./confg.css";

const ConfPage = () => {
  // Modal
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="ion-padding">
        <h1>Configuraciones Generales</h1><br />
        <h3>Versión: 1.0.0</h3><br />
        <h2 className="text-3xl text-red-900">Colección de La GlorietaShop</h2><br /><hr /><br />
        <h3>Created by: <b>PushoDev</b></h3><br />
        <h3 className="text-red-700">https://pushodev.github.io</h3>
      </div>
    </>
  );
};

export default ConfPage;
