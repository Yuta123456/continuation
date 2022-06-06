import { IonSlide, IonText } from '@ionic/react';
import React from 'react';
import slidesTextStyle from './SlidesCss';

const Slides2 = () => {
    return (
        <IonSlide style={{display: "block"}}>
            <IonText>
                <h1>
                    LineBotについて
                </h1>
            </IonText>
            <IonText className='ion-text-center' style={{fontSize:"12px"}}>
                <p style={slidesTextStyle}>LineBotについての記述を行う。</p>
            </IonText>
        </IonSlide>
    );
}

export default Slides2;