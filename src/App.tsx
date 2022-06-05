import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { home, statsChart} from 'ionicons/icons';
import Home from './pages/Home';
import Stats from './pages/Stats';

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
import Login from './pages/Login';
import AppPage from './AppPage';
import LineAuth from './pages/LineAuth';

setupIonicReact();


const App: React.FC = () => {
  const ctx = useUserInfo();
  return (
    <IonApp>
      <IonReactRouter>
        <userInfoContext.Provider value={ctx}>
          { ctx.userInfo === undefined ? 
            <IonRouterOutlet>
              <Route exact path="/auth">
                <LineAuth/>
              </Route>
              <Route exact path="/">
                <Login/>
              </Route>
            </IonRouterOutlet>
            : <AppPage/>
          }
        </userInfoContext.Provider>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
