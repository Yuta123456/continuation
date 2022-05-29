import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
            
            <IonButtons slot='end'><LineLoginButton/></IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Timeline/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
