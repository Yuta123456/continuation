import { IonSlide, IonText } from '@ionic/react';
import React from 'react';
import slidesTextStyle from './SlidesCss';

const Slides3 = () => {
    return (
        <IonSlide style={{display: "block"}}>
            <IonText>
                <h1>
                    このアプリについて
                </h1>
            </IonText>
            <IonText className='ion-text-center' style={{fontSize:"12px"}}>
                <p style={slidesTextStyle}>このアプリは、あなたの継続を手助けするアプリです。LineBotと連携し、毎日決まった時間に設定した内容を達成できたか聞いてくれます。</p>
                <p style={slidesTextStyle}>このページでは、あなたがどのぐらい継続しているか？可視化してくれます。</p>
            </IonText>
        </IonSlide>
    );
}

export default Slides3;