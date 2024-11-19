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
        <h1 className="text-2xl font-bold">Pantalla Operaciones</h1>
      </div>
      <IonCard className="animate__animated animate__fadeInUp bg-gradient-to-r from-slate-500 to-stone-700 rounded-lg">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle className="text-blue-400">
            Card Subtitle
          </IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent className="text-red-600">
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
