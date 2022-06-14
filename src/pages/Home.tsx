import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Timeline from '../components/Timeline';
import React, { useState } from 'react';
import './Tab1.css';
import { helpCircleOutline } from 'ionicons/icons';
import HelpModal from '../components/HelpModal';
import Menu from '../components/menu';

const Tab1: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonTitle>TimeLine</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton/>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowModal(true)}>
                <IonIcon icon={helpCircleOutline}/>
              </IonButton>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <Menu menuId='timeline'/>
      <IonContent fullscreen id="timeline">
        <Timeline/>
        <HelpModal showModal={showModal} setShowModal={setShowModal}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
