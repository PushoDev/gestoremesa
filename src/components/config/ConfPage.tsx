import React, { useState } from "react";
import { IonAlert, IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonInput, IonItem, IonList, IonText } from "@ionic/react";


import "./confg.css";

const ConfPage = () => {
  // Modal
  const [isOpen, setIsOpen] = useState(false);
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
      {/* Acciones Modal */}
      <IonButton expand="block" onClick={() => setIsOpen(true)}>
        Open
      </IonButton>
      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Modal</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
            reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
            Eaque, dicta.
          </p>
        </IonContent>
      </IonModal>

      <IonList>
        <IonItem>
          <IonInput labelPlacement="floating" value="hi@ionic.io">
            <div slot="label">
              Email <IonText color="danger">(Required)</IonText>
            </div>
          </IonInput>
        </IonItem>
      </IonList>
    </>
  );
};

export default ConfPage;
