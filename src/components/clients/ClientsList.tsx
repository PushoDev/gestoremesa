import React, { useRef } from "react";
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
  // Animar Modal de los Detalles
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

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

  //  Retornar Vista para el Listado de los Clientes
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
            <IonItemOptions id="open-modal" side="start">
              <IonItemOption>
                <IonButton id="open-modal" expand="block" color="primary">
                  <IonIcon slot="icon-only" icon={eyeSharp}></IonIcon>
                </IonButton>
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

      <IonModal
        id="example-modal"
        ref={modal}
        trigger="open-modal"
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}
      >
        <IonContent>
          <IonToolbar>
            <IonTitle>Modal</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => dismiss()}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://i.pravatar.cc/300?u=b" />
              </IonAvatar>
              <IonLabel>
                <h2>Connor Smith</h2>
                <p>Sales Rep</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://i.pravatar.cc/300?u=a" />
              </IonAvatar>
              <IonLabel>
                <h2>Daniel Smith</h2>
                <p>Product Designer</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://i.pravatar.cc/300?u=d" />
              </IonAvatar>
              <IonLabel>
                <h2>Greg Smith</h2>
                <p>Director of Operations</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://i.pravatar.cc/300?u=e" />
              </IonAvatar>
              <IonLabel>
                <h2>Zoey Smith</h2>
                <p>CEO</p>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
};

export default ClientsList;
