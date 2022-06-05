import LineLoginButton from "../components/LineLoginButton";
import React, { useContext } from 'react';
import { IonButtons, IonContent, IonHeader, IonImg, IonPage, IonRippleEffect, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { userInfoContext } from "../userHooks";
import imgSrc from '../data/login.png';
const Login: React.FC = () => {
    const ctx = useContext(userInfoContext);
    return (
        <IonPage>
            <IonContent fullscreen class="ion-text-center">
            <IonText style={{fontFamily: "Courier New"}}>
                <h1>継続Bot</h1>
            </IonText>
            <IonImg src={imgSrc}/>
            <IonText>
                <p>このアプリを使用するにはログインが必要です。</p>
            </IonText>
            <LineLoginButton/>
            </IonContent>
        </IonPage>
    );
}

export default Login;