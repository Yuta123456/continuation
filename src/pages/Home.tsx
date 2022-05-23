import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LineLoginButton from '../components/LineLoginButton';
import Timeline from '../components/Timeline';
import React from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">TimeLine</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Timeline/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
