import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, sparkles } from 'ionicons/icons';
import Tab1 from './pages/CardFlip';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/animation1">
            <Tab1 />
          </Route>
          <Route exact path="/animation2">
            <Tab2 />
          </Route>
          <Route path="/animation3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/animation1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="animation1" href="/animation1">
            <IonIcon icon={sparkles} color="tertiary" />
            <IonLabel>Animation 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="animation2" href="/animation2">
            <IonIcon icon={sparkles} color="secondary" />
            <IonLabel>Animation 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="animation3" href="/animation3">
            <IonIcon icon={sparkles} color="success" />
            <IonLabel>Animation 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
