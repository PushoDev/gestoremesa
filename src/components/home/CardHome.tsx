import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from "@ionic/react";
import "animate.css";

const CardHome = () => {
  return (
    <>
      <div className="ion-padding">
        <h1>CardHome</h1>
      </div>
      <IonCard className="animate__animated animate__fadeInUp">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Here's a small text description for the card content. Nothing more,
          nothing less.
        </IonCardContent>

        <IonButton fill="clear">Action 1</IonButton>
        <IonButton fill="clear">Action 2</IonButton>
      </IonCard>
    </>
  );
};

export default CardHome;
