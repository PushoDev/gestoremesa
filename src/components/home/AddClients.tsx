import React, { useState } from "react";
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
  // Estado para almacenar los valores ingresados por el usuario
  const [nombreEnvia, setNombreEnvia] = useState("");
  const [telefonoEnvia, setTelefonoEnvia] = useState("");
  const [cantidadEnvia, setCantidadEnvia] = useState("");
  const [nombreFamiliar, setNombreFamiliar] = useState("");
  const [telefonoFamiliar, setTelefonoFamiliar] = useState("");
  const [direccionFamiliar, setDireccionFamiliar] = useState("");
  const [transaccion, setTransaccion] = useState("");
  const [moneda, setMoneda] = useState("");
  const [cantidadRecive, setCantidadRecive] = useState("");
  const [tarjetaFamiliar, setTarjetaFamiliar] = useState("");
  const [nombreMensajero, setNombreMensajero] = useState("");
  const [telefonoMensajero, setTelefonoMensajero] = useState("");

  // Función para enviar los valores a la API de SheetDB
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("https://sheetdb.io/api/v1/jom1wk8v9e84y", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: [
            {
              id: "INCREMENT",
              name_client: nombreEnvia,
              cell_client: telefonoEnvia,
              envia_client: cantidadEnvia,
              name_familiar: nombreFamiliar,
              cell_familiar: telefonoFamiliar,
              address_familiar: direccionFamiliar,
              transaccion: transaccion,
              moneda: moneda,
              card: tarjetaFamiliar,
              recive_familiar: cantidadRecive,
              name_mensajero: nombreMensajero,
              cell_mensajero: telefonoMensajero
            }
          ]
        })
      });

      const createdRows = await response.json();
      console.log(`Se crearon ${createdRows} filas`);
    } catch (error) {
      console.error("Error al crear filas:", error);
    }
  };

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
            value={nombreEnvia}
            onIonChange={(e) => setNombreEnvia(e.detail.value!)}
          >
            {/* <IonIcon></IonIcon> */}
          </IonInput>
          <br />
          {/* Telefono del Cliente */}
          <IonInput
            label="Número de Teléfono"
            labelPlacement="floating"
            placeholder="Teléfono de Quien Envía"
            value={telefonoEnvia}
            onIonChange={(e) => setTelefonoEnvia(e.detail.value!)}
          >
            {/* <IonIcon></IonIcon> */}
          </IonInput>
          <br />
          {/* Cantidad que Envía */}
          <IonInput
            label="Cantidad que Envía"
            labelPlacement="floating"
            placeholder="Cantidad que Envía"
            value={cantidadEnvia}
            onIonChange={(e) => setCantidadEnvia(e.detail.value!)}
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
            value={telefonoFamiliar}
            onIonChange={(e) => setTelefonoFamiliar(e.detail.value!)}
          >
            {/* <IonIcon></IonIcon> */}
          </IonInput>
          <br />
          {/* Nombre y Apellidos de quien Recive */}
          <IonInput
            label="Nombre y Apellidos del Familiar"
            labelPlacement="floating"
            placeholder="Credenciales de quien Recive"
            value={nombreFamiliar}
            onIonChange={(e) => setNombreFamiliar(e.detail.value!)}
          >
            {/* <IonIcon></IonIcon> */}
          </IonInput>
          <br />
          {/* Direccion de Residencia del Familiar */}
          <IonInput
            label="Dirección Particular"
            labelPlacement="floating"
            placeholder="Lugar donde vive el familiar o amigo"
            value={nombreFamiliar}
            onIonChange={(e) => setDireccionFamiliar(e.detail.value!)}
          >
            {/* <IonIcon></IonIcon> */}
          </IonInput>
          <br />
          {/* Accione para el Familiar */}
          <IonItem>
            <IonSelect
              value={transaccion}
              onIonChange={(e) => setTransaccion(e.detail.value!)}
            >
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
            <IonSelect
              value={moneda}
              onIonChange={(e) => setMoneda(e.detail.value!)}
            >
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
            value={cantidadRecive}
            onIonChange={(e) => setCantidadRecive(e.detail.value!)}
          ></IonInput>
          {/* Opción Transferencia */}
          <IonItem>
            <IonSelect
              value={moneda}
              onIonChange={(e) => setMoneda(e.detail.value!)}
            >
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
            value={tarjetaFamiliar}
            onIonChange={(e) => setTarjetaFamiliar(e.detail.value!)}
          ></IonInput>
          <br />
          {/* Monto que Recive */}
          <IonInput
            labelPlacement="floating"
            label="Cantidad que Recive"
            placeholder="Monto que Recive"
            value={cantidadRecive}
            onIonChange={(e) => setCantidadRecive(e.detail.value!)}
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
            value={telefonoMensajero}
            onIonChange={(e) => setTelefonoMensajero(e.detail.value!)}
          ></IonInput>
          <br />
          <IonInput
            labelPlacement="floating"
            label="Nombre del Mensajero"
            placeholder="Mensajero que Entrega"
            value={nombreMensajero}
            onIonChange={(e) => setNombreMensajero(e.detail.value!)}
          ></IonInput>
          <br />
        </IonCardContent>

        <IonButton fill="clear" color={"success"} onClick={handleSubmit}>
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
