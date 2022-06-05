import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import React from 'react';

type HelpModalProps = {
    showModal: boolean,
    setShowModal: (newState: boolean) => void,
}
const HelpModal: React.FC<HelpModalProps> = (props) => {
    return (
        <IonModal isOpen={props.showModal}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>TimeLine</IonTitle>
                    <IonButtons slot="end">
                    <IonButton onClick={() => props.setShowModal(false)}>
                        <IonIcon icon={closeOutline}/>
                    </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                つかいかた。これから書きます。
            </IonContent>
        </IonModal>
    );
}

export default HelpModal;