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
import LineAuth from './pages/LineAuth';
import { defaultContext, userInfoContext, UserInfoContext, useUserInfo } from './userHooks';
import Login from './pages/Login';

setupIonicReact();


const App: React.FC = () => {
  const ctx = useUserInfo();
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <userInfoContext.Provider value={ctx}>
                <Home />
              </userInfoContext.Provider>
            </Route>
            <Route exact path="/stats">
              <userInfoContext.Provider value={ctx}>
                <Stats />
              </userInfoContext.Provider>
            </Route>
            <Route path="/auth">
              <userInfoContext.Provider value={ctx}>
                <LineAuth />
              </userInfoContext.Provider>
            </Route>
            {/* ログイン情報が無いときはログインさせたいんだけど */}
            {/* タブが出てきてしまう */}
            {/* {(ctx.userInfo === undefined) &&
            <Route exact path="/">
                <Login></Login>
            </Route>} */}
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
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
