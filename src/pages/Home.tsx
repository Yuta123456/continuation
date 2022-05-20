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
          <IonTitle>TimeLine</IonTitle>
        </IonToolbar>
        <LineLoginButton/>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Timeline/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
