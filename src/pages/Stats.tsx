import { IonContent, IonHeader, IonLabel, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
// import ContributionCalender from '../components/ContributionCalender';
import LineChartComponent from '../components/LineChartComponent';
const Tab2: React.FC = () => {
  const [selectSegment, setSelectSegment] = useState<string|undefined>("week");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSegment onIonChange={e => setSelectSegment(e.detail.value)} value={selectSegment}>
            <IonSegmentButton value="week">
              <IonLabel>週</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="month">
              <IonLabel>月</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="year">
              <IonLabel>年</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="all">
              <IonLabel>すべて</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {/* <ContributionCalender/> */}
          <LineChartComponent/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
