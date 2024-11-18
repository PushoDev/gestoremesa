import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Tab2.css";
// Importar ApiRest
import { useState, useEffect } from "react";
import ClientsList from "../components/clients/ClientsList";

const Tab2: React.FC = () => {
  const [datos, setDatos] = useState([]);

  // Url de la Api a Trabajar
  const initialUrl = "https://sheetdb.io/api/v1/jom1wk8v9e84y";

  const readCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .then((error) => console.log(error));
  };

  useEffect(() => {
    readCharacters(initialUrl);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Listado de Operaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ClientsList datos={datos} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
