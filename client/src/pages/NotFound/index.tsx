import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonButton,
} from '@ionic/react'

import './style.css'

const NotFound: React.FC = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <div className="notfound">
          <IonText>
            <h1>These are not the droids you're looking for...</h1>
          </IonText>
          <IonButton href="/artists">Home</IonButton>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default NotFound
