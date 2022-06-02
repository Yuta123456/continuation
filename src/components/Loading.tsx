import { IonLoading } from "@ionic/react";
import React from 'react';
type LoadingProps = {
    isLoading: boolean,
}

const Loading: React.FC<LoadingProps> = (props) => {

    return (
     <IonLoading
        cssClass='my-custom-class'
        isOpen={props.isLoading}
        // onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        // duration={5000}
      />
    );
}


export default Loading;