import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import Pixela from '../components/Pixela';
import React from 'react';
import ContributionCalender from '../components/ContributionCalender';
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ContributionCalender/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
