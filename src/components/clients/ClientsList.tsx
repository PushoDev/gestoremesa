import React from "react";
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

const ClientsList = ({ datos = [] }) => {
  return (
    <>
      {datos.map((item, index) => (
        <IonList className="ocasiones" inset={true} key={index}>
          {/* Detalles del Cliente */}
          <IonItemSliding className="ocasiones">
            <IonItem
              className="ocasiones"
              button={true}
              detail={true}
              detailIcon={person}
            >
              <IonLabel>
                <h2>
                  <b>Cliente:</b> {item.name_client}
                </h2>
                <p>
                  <b>Envió:</b> {item.envia_client} | <b>Telf: </b>
                  {item.cell_client}
                </p>
                <p>
                  <b>Familiar:</b> {item.name_familiar}
                </p>
              </IonLabel>
            </IonItem>
            {/* Ver Detalles */}
            <IonItemOptions side="start">
              <IonItemOption color="primary">
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
        </IonList>
      ))}
      <div></div>
    </>
  );
};

export default ClientsList;
