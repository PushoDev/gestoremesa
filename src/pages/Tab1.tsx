import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon
} from "@ionic/react";
import "./Tab1.css";
import "animate.css";
import AddClients from "../components/home/AddClients";
import { personAdd } from "ionicons/icons";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Operaciones</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="start" icon={personAdd}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>
          <AddClients />
        </div>
        <br />
        <br />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
