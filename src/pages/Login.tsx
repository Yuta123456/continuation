import LineLoginButton from "../components/LineLoginButton";
import React, { useContext } from 'react';
import { IonButtons, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { userInfoContext } from "../userHooks";
const Login: React.FC = () => {
    const ctx = useContext(userInfoContext);
    console.log(ctx);
    return (
        <IonPage>
            <IonContent fullscreen>
            <LineLoginButton/>
            <IonText class="ion-text-center">
                <h1>このアプリを使用するにはログインが必要です。</h1>
            </IonText>
            </IonContent>
        </IonPage>
    );
}

export default Login;