import LineLoginButton from "../components/LineLoginButton";
import React from 'react';
import { IonContent, IonImg, IonPage, IonText} from "@ionic/react";
import imgSrc from '../data/login.png';

type LoginProp = {
    lineState: string;
}
const Login: React.FC<LoginProp> = (props) => {
    return (
        <IonPage>
            <IonContent fullscreen class="ion-text-center">
                <IonText style={{fontFamily: "Courier New"}}>
                    <h1>継続Bot</h1>
                </IonText>
                <IonText color="medium">
                    <p>~あなたの継続を補助するアプリ~</p>
                </IonText>
                <IonImg src={imgSrc} style={{width:"300px", display: "block", margin: "auto"}}/>
                <IonText>
                    <p>このアプリを使用するにはログインが必要です。</p>
                </IonText>
                <LineLoginButton lineState={props.lineState}/>
            </IonContent>
        </IonPage>
    );
}

export default Login;