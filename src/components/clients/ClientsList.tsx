import React, { useState, useEffect } from "react";
import {
  IonIcon,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonItemSliding,
  IonLabel,
  IonList,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
} from "@ionic/react";
import { eyeSharp, person, trash, warning } from "ionicons/icons";
import "./client-list.css";

const ClientsList = () => {
  // Interaccion con Modal - Read Clientes
  const [isOpen, setIsOpen] = useState(false)
  // Interaccion con la APi Rest
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const response = await fetch("https://sheetdb.io/api/v1/jom1wk8v9e84y");
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerClientes();
  }, []);
  // Vista para mostrar los clientes
  return (
    <>
      <div className="ion-padding">
        {/* Card para Mostrar Detalles del Cliente */}
        <IonList
          className="animate__animated animate__fadeInUp bg-transparent"
        >
          {/* Detalles del Cliente */}
          {clientes.map((cliente, index) => (
            <IonItemSliding key={index} className="ocasiones bg-gradient-to-b from-gray-900 to-gray-600">
              <IonItem button={true} detail={true} detailIcon={person}>
                <IonLabel>
                  <h2>
                    <b className="text-blue-600">Cliente: </b>{cliente.name_client}
                  </h2>
                  <p>
                    <b className="text-green-500">Envió:</b> {cliente.envia_client}
                    <b className="text-green-500"> | Telf: </b> {cliente.cell_client}

                  </p>
                  <p>
                    <b className="text-green-600">Familiar: </b>{cliente.name_familiar}
                  </p>
                </IonLabel>
              </IonItem>
              {/* Ver Detalles */}
              <IonItemOptions side="start">
                <IonItemOption color="primary"
                  onClick={() => setIsOpen(true)}
                >
                  <IonIcon slot="icon-only" icon={eyeSharp}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
              {/* Delete Cliente */}
              <IonItemOptions slot="end">
                <IonItemOption color="danger" expandable={true}>
                  <IonIcon slot="icon-only" icon={trash}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        {/* Modal */}
        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Detalles del Cliente</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Aceptar</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {/* Contenido */}
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
            </IonCard>
          </IonContent>
        </IonModal>
      </div>
    </>
  );
};

export default ClientsList;
