import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton, IonIcon
} from "@ionic/react";
import "./Tab2.css";
import ClientsList from "../components/clients/ClientsList";
import { listSharp } from 'ionicons/icons'

const Tab2: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Listado de Operaciones</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="start" icon={listSharp}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ClientsList />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
