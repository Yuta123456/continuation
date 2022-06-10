import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import React from 'react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {userInfoContext, useUserInfo } from './userHooks';
import AppPage from './AppPage';
import LoginComponent from './components/LoginComponent';

setupIonicReact();


const App: React.FC = () => {
  const ctx = useUserInfo();
  return (
    <IonApp>
      <IonReactRouter>
        <userInfoContext.Provider value={ctx}>
          { ctx.userInfo === undefined ? 
            <LoginComponent />
            : <AppPage/>
          }
        </userInfoContext.Provider>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
