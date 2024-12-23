import React, { useState } from "react";
import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText
} from "@ionic/react";
import { card, carSharp, cashSharp, person, phonePortrait, warning } from "ionicons/icons";

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
      // Api Rest:https://sheetdb.io/api/v1/jom1wk8v9e84y 
      const response = await fetch("https://sheetdb.io/api/v1/4dre2nqub01h2", {
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

  // Cancelar operaciones
  const resetForm = () => {
    setNombreEnvia("");
    setTelefonoEnvia("");
    setCantidadEnvia("");
    setNombreFamiliar("");
    setTelefonoFamiliar("");
    setDireccionFamiliar("");
    setTransaccion("");
    setMoneda("");
    setCantidadRecive("");
    setTarjetaFamiliar("");
    setNombreMensajero("");
    setTelefonoMensajero("");
  };

  // Formato de la tarjeta de credito del familiar que recive
  const formatTarjeta = (tarjeta: string): string => {
    const tarjetaFormateada = tarjeta
      .replace(/\D/g, "")
      .replace(/(\{4})/g, "\$1-");
    return tarjetaFormateada;
  };

  return (
    <>
      <IonCard className="animate__animated animate__fadeInUp bg-gradient-to-r from-slate-900 to-slate-700">
        <IonCardHeader>
          <IonCardTitle>Agregar Operación</IonCardTitle>
          <IonCardSubtitle color={"success"}>Cliente que Envía</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent className="text-red-600">
          {/* Contenido del formulario */}
          <div>
            {/* Nombre del cliente que envía */}
            <IonInput
              label="Nombre y Apellidos"
              labelPlacement="floating"
              placeholder="Credenciales de quien envía"
              fill="solid"
              value={nombreEnvia}
              onIonChange={(e) => setNombreEnvia(e.detail.value!)}              
            >
              <IonIcon slot="start" color="success" icon={person} aria-hidden="true"></IonIcon>
            </IonInput>
            <br />
            {/* Teléfono del cliente */}
            <IonInput
              label="Número de Teléfono"
              labelPlacement="floating"
              placeholder="Teléfono de quien envía"
              fill="solid"
              value={telefonoEnvia}
              onIonChange={(e) => setTelefonoEnvia(e.detail.value!)}
              type="number"
            >
              <IonIcon slot="start" color="success" icon={phonePortrait} aria-hidden="true"></IonIcon>
            </IonInput>
            <br />
            {/* Cantidad que envía */}
            <IonInput
              label="Cantidad que Envía"
              labelPlacement="floating"
              placeholder="Cantidad que envía"
              fill="solid"
              value={cantidadEnvia}
              onIonChange={(e) => setCantidadEnvia(e.detail.value!)}
              type="number"
            >
              <IonIcon slot="start" color="success" icon={cashSharp} aria-hidden="true"></IonIcon>
            </IonInput>
          </div>
          <br />
          <hr />
          <br />

          {/* Información del familiar del cliente */}
          <IonCardSubtitle color={"success"}>Familiar que Recive</IonCardSubtitle>
          {/* Número de teléfono del familiar para localizar */}
          <IonInput
            label="Número para Contactar"
            labelPlacement="floating"
            placeholder="Contacto de quien recibe"
            fill="solid"
            value={telefonoFamiliar}
            onIonChange={(e) => setTelefonoFamiliar(e.detail.value!)}
            type="number"
          />
          <br />
          {/* Nombre y apellidos de quien recibe */}
          <IonInput
            label="Nombre y Apellidos del Familiar"
            labelPlacement="floating"
            placeholder="Credenciales de quien recibe"
            fill="solid"
            value={nombreFamiliar}
            onIonChange={(e) => setNombreFamiliar(e.detail.value!)}
          />
          <br />
          {/* Dirección de residencia del familiar */}
          <IonInput
            label="Dirección Particular"
            labelPlacement="floating"
            placeholder="Lugar donde vive el familiar o amigo"
            fill="solid"
            value={direccionFamiliar}
            onIonChange={(e) => setDireccionFamiliar(e.detail.value!)}
          />
          <br />
          {/* Acción para el familiar */}
          <IonItem>
            <IonSelect
              value={transaccion}
              onIonChange={(e) => setTransaccion(e.detail.value!)}
            >
              <div slot="label">
                <IonText color={"success"}>Tipo de Transacción</IonText>
              </div>
              <IonSelectOption value="efectivo">Efectivo</IonSelectOption>
              <IonSelectOption value="transferencia">
                Transferencia
              </IonSelectOption>
            </IonSelect>
          </IonItem>
          <br />
          {/* Opción efectivo */}
          {transaccion === "efectivo" ? (
            <>
              <IonGrid>
                <IonRow>
                  <IonCol size="5">
                    {/* Tipo de moneda USD - CUP */}
                    <IonItem>
                      <IonSelect
                        value={moneda}
                        onIonChange={(e) => setMoneda(e.detail.value!)}
                      >
                        <div>
                          <IonText slot="label" color={warning}>
                            Tipo de Moneda
                          </IonText>
                        </div>
                        <IonSelectOption value="usd">USD</IonSelectOption>
                        <IonSelectOption value="cup">CUP</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonCol>
                  <IonCol size="7">
                    {/* Monto que recibe */}
                    <IonInput
                      labelPlacement="floating"
                      label="Cantidad que Recive"
                      placeholder="Monto que Recive"
                      fill="outline"
                      value={cantidadRecive}
                      onIonChange={(e) => setCantidadRecive(e.detail.value!)}
                      type="number"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
              <br />
            </>
          ) : transaccion === "transferencia" ? (
            <>
                {/* Opción transferencia */}

              <IonGrid>
                <IonRow>
                  <IonCol size="5">
                      {/* Tipo de moneda */}
                    <IonItem>
                      <IonSelect
                        value={moneda}
                        onIonChange={(e) => setMoneda(e.detail.value!)}
                      >
                        <div>
                          <IonText slot="label">Tipo de Moneda</IonText>
                        </div>
                        <IonSelectOption value="cup">CUP</IonSelectOption>
                        <IonSelectOption value="mlc">MLC</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonCol>
                  <IonCol size="7">
                      {/* Monto que recibe */}
                    <IonInput
                      labelPlacement="floating"
                      label="Cantidad que Recive"
                      placeholder="Monto que Recive"
                        fill="outline"
                      value={cantidadRecive}
                      onIonChange={(e) => setCantidadRecive(e.detail.value!)}
                        type="number"
                      />
                  </IonCol>
                </IonRow>
              </IonGrid>
              <br />
                {/* Número de tarjeta */}
              <IonGrid>
                <IonRow>
                    <IonCol size="12">
                    <IonInput
                      label="Número de Tarjeta"
                      color="success"
                      labelPlacement="floating"
                        placeholder="0000-0000-0000-0000"
                      value={formatTarjeta(tarjetaFamiliar)}
                      onIonInput={(e) =>
                        setTarjetaFamiliar(
                          formatTarjeta(e.target.value as string)
                        )
                      }
                        fill="outline"
                        type="number"
                      >
                        <IonIcon slot="start" color="success" icon={card} aria-hidden="true"></IonIcon>
                      </IonInput>
                    </IonCol>
                </IonRow>
              </IonGrid>
              <br />
            </>
          ) : null}
          <br />
          <hr />
          <br />

          {/* Información del mensajero que realiza la entrega */}
          <IonCardSubtitle color={"success"}>Mensajero que Entrega</IonCardSubtitle><br />
          {/* Número de teléfono del mensajero para localizar */}
          <IonInput
            labelPlacement="floating"
            label="Contacto del Mensajero"
            placeholder="Teléfono del Mensajero a Localizar"
            value={telefonoMensajero}
            onIonChange={(e) => setTelefonoMensajero(e.detail.value!)}
            type="number"
            fill="outline"
          />
          <br />
          <IonInput
            labelPlacement="floating"
            label="Nombre del Mensajero"
            placeholder="Mensajero que Entrega"
            value={nombreMensajero}
            onIonChange={(e) => setNombreMensajero(e.detail.value!)}
            fill="solid"
          >
            <IonIcon slot="start" color="success" icon={carSharp} aria-hidden="true"></IonIcon>
          </IonInput>
          <br />
        </IonCardContent>

        {/* Botones */}
        <IonButton fill="clear" color={"success"} id="present-alert" onClick={handleSubmit}>
          Agregar
        </IonButton>
        <IonButton fill="clear" color={"danger"} onClick={resetForm}>
          Cancelar Operación
        </IonButton>
        {/* Alert Confirmations */}
        <IonAlert
          trigger="present-alert"
          header="Perfecto"
          subHeader="Operación Realizada"
          message="El Cliente ha sido agregado Satisfactoriamente."
          buttons={["Aceptar"]}
        ></IonAlert>
      </IonCard>
    </>
  );
};

export default AddClients;