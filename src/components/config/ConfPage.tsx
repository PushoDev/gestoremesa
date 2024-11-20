import React from "react";
import { IonAlert, IonButton } from "@ionic/react";
import "./confg.css";

const ConfPage = () => {
  return (
    <>
      <IonButton id="present-alert">Aceptar</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Perfecto"
        subHeader="Operación Realizada"
        message="El Cliente ha sido agregado Satisfactoriamente."
        buttons={["Action"]}
      ></IonAlert>
    </>
  );
};

export default ConfPage;
