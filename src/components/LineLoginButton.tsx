import CONFIG from '../const/config';
import imgSrc from '../data/LINE_Login_Button_Image/Line_Login_Button_Image/images/DeskTop/2x/20dp/btn_login_base.png';
import getRandomString from '../util/getRandomString';
import React from 'react';
import { redirect_uri } from '../const/url';
import { IonButton } from '@ionic/react';
const LineLoginButton: React.FC = () => {
    const lineState = getRandomString();
    // https://musical-lamington-39fe95.netlify.app/auth
    // TODO: ごめんなさい今度治す
    return (
        <IonButton href={"https://access.line.me/dialog/oauth/weblogin?response_type=code&client_id=" + CONFIG["CHANNEL_ID"]+"&redirect_uri=" + redirect_uri + "&state=" + lineState + "&scope=profile%20openid"}>
            <img src={imgSrc} alt="icon"/>
        </IonButton>
    );
}

export default LineLoginButton;
