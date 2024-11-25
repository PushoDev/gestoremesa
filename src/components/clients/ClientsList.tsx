import React, { useState, useEffect } from "react";
import {
  IonIcon,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonItemSliding,
  IonLabel,
  IonList
} from "@ionic/react";
import { eyeSharp, person, trash } from "ionicons/icons";
import "./client-list.css";

const ClientsList = () => {
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
                    <b className="text-blue-600">Cliente:</b>
                  </h2>
                  <p>
                    <b className="text-green-500">Envió:</b>
                    | <b className="text-green-500">Telf: </b>

                  </p>
                  <p>
                    <b className="text-red-600">Familiar:</b>
                  </p>
                </IonLabel>
              </IonItem>
              {/* Ver Detalles */}
              <IonItemOptions id="open-modal" side="start">
                <IonItemOption
                  id="open-modal"

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
      </div>
    </>
  );
};

export default ClientsList;
