import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { ellipse, triangle } from 'ionicons/icons'

import Artists from './pages/Artists'
import Artist from './pages/Artist'
import Playlists from './pages/Playlists'
import NotFound from './pages/NotFound'
import Login from './pages/Login'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

const App: React.FC = () => {
  const activeSession = sessionStorage.getItem('rocklistSession')

  const [loggedIn, setLoggedIn] = useState(activeSession || false)

  const isLoggedIn = (val: any) => {
    setLoggedIn(val)
  }

  return (
    <IonApp>
      {!loggedIn && <Login isLoggedIn={isLoggedIn} />}
      {loggedIn && (
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/artists" component={Artists} exact={true} />
              <Route path="/artists/:id" component={Artist} exact={true} />
              <Route path="/playlists" component={Playlists} exact={true} />
              <Route
                path="/"
                render={() => <Redirect to="/artists" />}
                exact={true}
              />
              <Route render={() => <NotFound />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="artists" href="/artists">
                <IonIcon icon={triangle} />
                <IonLabel>Artists</IonLabel>
              </IonTabButton>
              <IonTabButton tab="playlists" href="/playlists">
                <IonIcon icon={ellipse} />
                <IonLabel>Playlists</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      )}
    </IonApp>
  )
}

export default App
