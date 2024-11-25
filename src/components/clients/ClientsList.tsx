import React, { useState, useEffect, useRef } from "react";
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
  IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle
} from "@ionic/react";
import { eyeSharp, person, trash, warning } from "ionicons/icons";
import "./client-list.css";

const ClientsList = () => {
  // Interaccion con Modal - Read Clientes
  const [isOpen, setIsOpen] = useState(false)
  // Interaccion con la APi Rest
  const [clientes, setClientes] = useState([]);
  // Seleccionar Cliente
  const [clienteSeleccionado, setClienteSeleccionado] = useState({})
  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const response = await fetch("https://sheetdb.io/api/v1/jom1wk8v9e84y");
        const data = await response.json();
        setClientes(data);
        console.log(data);        
      } catch (error) {
        console.error(error);
      }
    };
    obtenerClientes();
  }, []);
  // Eliminar datos del cliente 
  const eliminarCliente = async (id: number) => {
    try {
      const response = await fetch(`https://sheetdb.io/api/v1/jom1wk8v9e84y/id/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      if (error.status === 404) {
        console.log('Error: El cliente no existe');
      } else {
        console.log('Error: Ocurrió un error al eliminar el cliente');
      }
    }
  };


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
                  // onClick={() =>  setIsOpen(true)}
                  onClick={() => {
                    setClienteSeleccionado(cliente);
                    setIsOpen(true);
                  }}
                >
                  <IonIcon slot="icon-only" icon={eyeSharp}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
              {/* Delete Cliente */}
              <IonItemOptions slot="end">
                <IonItemOption color="danger" expandable={true} onClick={() => eliminarCliente(cliente.id)}>
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
                <IonCardSubtitle>Cliente que Envía</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p><b>Nombre Cliente: </b> {clienteSeleccionado.name_client} </p><br />
                <p><b>No Contacto: </b> {clienteSeleccionado.cell_client} </p><br />
                <p><b>Cantidad Envía: </b>{clienteSeleccionado.envia_client} </p>
                <br /><hr /><br />
                <IonCardSubtitle>Datos del Familiar</IonCardSubtitle><br /><br />
                <p><b>Nombre: </b> {clienteSeleccionado.name_familiar} </p><br />
                <p><b>Contacto: </b> {clienteSeleccionado.cell_familiar} </p><br />
                <p><b>Dirección: </b> {clienteSeleccionado.address_familiar} </p><br />
                <p><b>Operación: </b> {clienteSeleccionado.transaccion} </p><br />
                <p><b>Tipo de Moneda: </b> {clienteSeleccionado.moneda} </p><br />
                {/* condicion */}
                {clienteSeleccionado.card ? (
                  <div>
                    <p><b>No. Tarjeta: </b> {clienteSeleccionado.card} </p>
                    <br />
                  </div>
                ) : null}


                {/* { clienteSeleccionado.card && (
                <p><b>No. Tarjeta: </b> {clienteSeleccionado.card} </p>
                ) } */}
                {/* <p><b>No. Tarjeta: </b> {clienteSeleccionado.card} </p><br /> */}

                <p><b>Cantidad Recive: </b> {clienteSeleccionado.recive_familiar} </p><br />
                <br /><hr /><br />
                <IonCardSubtitle>Datos del Mensajero</IonCardSubtitle><br /><br />
                <p><b>Nombre: </b> {clienteSeleccionado.name_mensajero} </p><br />
                <p><b>Contacto: </b> {clienteSeleccionado.cell_mensajero} </p><br />
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonModal>
      </div>
      <br />
    </>
  );
};

export default ClientsList;
