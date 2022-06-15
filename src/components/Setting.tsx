import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonPicker } from '@ionic/react';
import { chevronDownOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Setting: React.FC = () => {
    // 継続内容を取ってくる必要がある
    const [content, setContent] = useState("");
    const [present] = useIonPicker();
    const [noticeTime, setNoticeTime] = useState("");
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Setting</IonTitle>
                    <IonButtons>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
            <IonList>
                <IonItem>
                    <IonLabel>継続内容</IonLabel>
                    <IonInput value={content} placeholder="Enter Input" onIonChange={e => setContent(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem
                    onClick={
                        () => {
                            console.log("hey");
                            return (
                                present({
                                    buttons: [
                                        {
                                            text: '設定',
                                            handler: (selected) => {
                                                setNoticeTime(selected.time.value)
                                            },
                                        },
                                    ],
                                    columns: [
                                        {
                                        name: 'time',
                                        options: [...Array(24)].map((_, index) => {
                                            return {
                                                text: index.toString() + ":00",
                                                value: index.toString() + ":00",
                                            }
                                        }),
                                        },
                                    ],
                                })
                            )
                        }
    
                    }
                >
                    {/* FIXME: https://github.com/ionic-team/ionic-docs/blob/main/static/demos/api/picker/index.html */}
                    <IonLabel>通知時間</IonLabel>
                    {noticeTime}
                    <IonIcon icon={chevronDownOutline}/>
                </IonItem>
             </IonList>
                <Link to="home">
                    <IonButton>
                        変更
                    </IonButton>
                </Link>
            </IonContent>
        </IonPage>
    );
}
export default Setting;