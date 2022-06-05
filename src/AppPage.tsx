import { Redirect, Route } from "react-router";
import LineAuth from "./pages/LineAuth";
import { userInfoContext, useUserInfo } from "./userHooks";
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
import { home, statsChart} from 'ionicons/icons';
import Home from './pages/Home';
import Stats from './pages/Stats';

const AppPage = () => {
    return (
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home/>
            </Route>
            <Route exact path="/stats">
                <Stats/>
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="stats" href="/stats">
              <IonIcon icon={statsChart}/>
              <IonLabel>Stats</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
    );
}
export default AppPage;