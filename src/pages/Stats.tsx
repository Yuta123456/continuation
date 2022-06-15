import { IonContent, IonHeader, IonLabel, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import Chart from '../components/Chart'
// import ContributionCalender from '../components/ContributionCalender';
const Tab2: React.FC = () => {
  const [selectSegment, setSelectSegment] = useState<string | undefined>('month')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSegment onIonChange={(e) => setSelectSegment(e.detail.value)} value={selectSegment} style={{ width: '80%', margin: '20px auto' }}>
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
        <Chart type={selectSegment} />
      </IonContent>
    </IonPage>
  )
}

export default Tab2
