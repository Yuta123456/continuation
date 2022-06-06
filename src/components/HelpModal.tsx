import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonModal, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import React from 'react';
import { SlidesExample } from './SlidesExample';

type HelpModalProps = {
    showModal: boolean,
    setShowModal: (newState: boolean) => void,
}
const HelpModal: React.FC<HelpModalProps> = (props) => {
    return (
        <IonModal isOpen={props.showModal}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Help</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => props.setShowModal(false)}>
                            <IonIcon icon={closeOutline}/>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <SlidesExample/>
            </IonContent>
        </IonModal>
    );
}

export default HelpModal;