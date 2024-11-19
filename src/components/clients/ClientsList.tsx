import React, { useState, useEffect } from "react";
import {
  IonIcon,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonItemSliding,
  IonLabel,
  createAnimation,
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonAvatar,
  IonImg
} from "@ionic/react";
import { eyeSharp, person, trash } from "ionicons/icons";
import "./client-list.css";

const ClientsList = ({ datos = [] }) => {
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [datosCliente, setDatosCliente] = useState({});

  const seleccionarCliente = (cliente) => {
    setClienteSeleccionado(cliente);
    fetch(`https://sheetdb.io/api/v1/jom1wk8v9e84y/search?id=${cliente.id}`)
      .then((response) => response.json())
      .then((data) => setDatosCliente(data[0]));
  };

  const enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root?.querySelector("ion-backdrop")!)
      .fromTo("opacity", "0.01", "var(--backdrop-opacity)");

    const wrapperAnimation = createAnimation()
      .addElement(root?.querySelector(".modal-wrapper")!)
      .keyframes([
        { offset: 0, opacity: "0", transform: "scale(0)" },
        { offset: 1, opacity: "0.99", transform: "scale(1)" }
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing("ease-out")
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: HTMLElement) => {
    return enterAnimation(baseEl).direction("reverse");
  };

  const dismiss = () => {
    setClienteSeleccionado(null);
  };

  return (
    <>
      <div className="">
        {datos.map((item, index) => (
          <IonList
            className="animate__animated animate__fadeInUp bg-transparent"
            inset={true}
            key={index}
          >
            {/* Detalles del Cliente */}
            <IonItemSliding className="ocasiones bg-gradient-to-b from-gray-900 to-gray-600">
              <IonItem button={true} detail={true} detailIcon={person}>
                <IonLabel>
                  <h2>
                    <b className="text-blue-600">Cliente:</b> {item.name_client}
                  </h2>
                  <p>
                    <b className="text-green-500">Envió:</b> {item.envia_client}{" "}
                    | <b className="text-green-500">Telf: </b>
                    {item.cell_client}
                  </p>
                  <p>
                    <b className="text-red-600">Familiar:</b>{" "}
                    {item.name_familiar}
                  </p>
                </IonLabel>
              </IonItem>
              {/* Ver Detalles */}
              <IonItemOptions id="open-modal" side="start">
                <IonItemOption
                  id="open-modal"
                  onClick={() => seleccionarCliente(item)}
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
          </IonList>
        ))}
      </div>

      <IonModal
        id="example-modal"
        trigger="open-modal"
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}
      >
        <IonContent>
          <IonToolbar>
            <IonTitle>Modal</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={dismiss}>Aceptar</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList>
            {clienteSeleccionado && (
              <IonItem>
                <IonLabel>
                  <h2>
                    <b className="text-blue-600">Cliente:</b>{" "}
                    {datosCliente.name_client}
                  </h2>
                  <p>
                    <b className="text-green-500">Envió:</b>{" "}
                    {datosCliente.envia_client} |{" "}
                    <b className="text-green-500">Telf: </b>
                    {datosCliente.cell_client}
                  </p>
                  <p>
                    <b className="text-red-600">Familiar:</b>{" "}
                    {datosCliente.name_familiar}
                  </p>
                </IonLabel>
              </IonItem>
            )}
            {clienteSeleccionado && (
              <IonItem>
                <IonLabel>
                  <h2>
                    <b className="text-blue-600">Cliente que Recibe:</b>{" "}
                    {datosCliente.name_familiar}
                  </h2>
                  <p>
                    <b className="text-green-500">Telefono:</b>{" "}
                    {datosCliente.cell_familiar}
                  </p>
                  <p>
                    <b className="text-red-600">Tipo de Transacción:</b>{" "}
                    {datosCliente.transaccion}
                  </p>
                  <p>
                    <b className="text-red-600">Monto Recibido:</b>{" "}
                    {datosCliente.recive_familiar}
                  </p>
                  <p>
                    <b className="text-red-600">Tipo de Moneda:</b>{" "}
                    {datosCliente.moneda}
                  </p>
                  <p>
                    <b className="text-red-600">Numero de Tarjeta:</b>{" "}
                    {datosCliente.card}
                  </p>
                </IonLabel>
              </IonItem>
            )}
            {clienteSeleccionado && (
              <IonItem>
                <IonLabel>
                  <h2>
                    <b className="text-blue-600">Mensajero que Entrega:</b>{" "}
                    {datosCliente.name_mensajero}
                  </h2>
                  <p>
                    <b className="text-green-500">Telefono:</b>{" "}
                    {datosCliente.cell_mensajero}
                  </p>
                </IonLabel>
              </IonItem>
            )}
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
};

export default ClientsList;
