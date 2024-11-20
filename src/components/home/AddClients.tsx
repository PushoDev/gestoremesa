import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonText
} from "@ionic/react";

const AddClients = () => {
  return (
    <>
      <IonCard className="animate__animated animate__fadeInUp bg-gradient-to-r from-slate-900 to-slate-700">
        <IonCardHeader>
          <IonCardTitle>Agregar Operación</IonCardTitle>
          <IonCardSubtitle>Cliente que Envía</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent className="text-red-600">
          {/* Contenido del Formulario */}
          {/* Nombre del Cliente que Envía */}
          <IonInput
            label="Nombre y Apellidos"
            labelPlacement="floating"
            placeholder="Credenciales de quien Envía"
          >
            {/* <IonIcon></IonIcon> */}
          </IonInput>
          <br />
          {/* Telefono del Cliente */}
          <IonInput
            label="Número de Teléfono"
            labelPlacement="floating"
            placeholder="Teléfono de Quien Envía"
          >
            {/* <IonIcon></IonIcon> */}
          </IonInput>
          <br />
          {/* Cantidad que Envía */}
          <IonInput
            label="Cantidad que Envía"
            labelPlacement="floating"
            placeholder="Cantidad que Envía"
          >
            {/* <IonIcon></IonIcon> */}
          </IonInput>
          <br />
          <hr />
          <br />

          {/* Informacón del Familiar del Cliente */}
          <IonCardSubtitle>Familiar que Recive</IonCardSubtitle>
          {/* Número de Telf. del Familiar para loccalizar */}
          <IonInput
            label="Número para Contactar"
            labelPlacement="floating"
            placeholder="Contacto de quien Recive"
          >
            {/* <IonIcon></IonIcon> */}
          </IonInput>
          <br />
          {/* Nombre y Apellidos de quien Recive */}
          <IonInput
            label="Nombre y Apellidos del Familiar"
            labelPlacement="floating"
            placeholder="Credenciales de quien Recive"
          >
            {/* <IonIcon></IonIcon> */}
          </IonInput>
          <br />
          {/* Accione para el Familiar */}
          <IonItem>
            <IonSelect>
              <div slot="label">
                <IonText color={"success"}>Tipo de Transacción</IonText>
              </div>
              <IonSelectOption>Efectivo</IonSelectOption>
              <IonSelectOption>Transferencia</IonSelectOption>
            </IonSelect>
          </IonItem>
          <br />
          {/* En caso de Escoger */}
          {/* Opción Efectivo */}
          <IonItem>
            <IonSelect>
              <div color="warning">
                <IonText>Tipo de Moneda</IonText>
              </div>
              <IonSelectOption>USD</IonSelectOption>
              <IonSelectOption>CUP</IonSelectOption>
            </IonSelect>
          </IonItem>
          <br />
          {/* Monto que Recive */}
          <IonInput
            labelPlacement="floating"
            label="Cantidad que Recive"
            placeholder="Monto que Recive"
          ></IonInput>
          {/* Opción Transferencia */}
          <IonItem>
            <IonSelect>
              <div color="warning">
                <IonText>Tipo de Moneda</IonText>
              </div>
              <IonSelectOption>CUP</IonSelectOption>
              <IonSelectOption>MLC</IonSelectOption>
            </IonSelect>
          </IonItem>
          <br />
          {/* Número de Tarjeta */}
          <IonInput
            labelPlacement="floating"
            label="Número de Tarjeta"
            placeholder="Ingrese Número de Tarjeta"
          ></IonInput>
          <br />
          {/* Monto que Recive */}
          <IonInput
            labelPlacement="floating"
            label="Cantidad que Recive"
            placeholder="Monto que Recive"
          ></IonInput>
          <br />
          <hr />
          <br />

          {/* Informacón del Mensajero que realiza la Entrega */}
          <IonCardSubtitle>Mensajero que Entrega</IonCardSubtitle>
          {/* Número de Telf. del Mensajero para loccalizar */}
          <IonInput
            labelPlacement="floating"
            label="Contacto del Mensajero"
            placeholder="Teléfono del Mensajero a Localizar"
          ></IonInput>
          <br />
          <IonInput
            labelPlacement="floating"
            label="Nombre del Mensajero"
            placeholder="Mensajero que Entrega"
          ></IonInput>
          <br />
        </IonCardContent>

        <IonButton fill="clear" color={"success"}>
          Agregar
        </IonButton>
        <IonButton fill="clear" color={"danger"}>
          Cancelar Operación
        </IonButton>
      </IonCard>
    </>
  );
};

export default AddClients;
