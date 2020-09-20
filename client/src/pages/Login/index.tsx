import React from 'react'
import { IonText, IonButton } from '@ionic/react'

import './style.css'

export interface LoginProps {
  isLoggedIn: (val: any) => void
}

const Login: React.FC<LoginProps> = ({ isLoggedIn }) => {
  const login = () => {
    sessionStorage.setItem('rocklistSession', 'true')
    isLoggedIn(true)
  }

  return (
    <div className="container">
      <div className="item">
        <IonText>
          <h1>Create a Rocklist session!</h1>
        </IonText>
        <IonButton className="button-start" onClick={() => login()}>
          Start the music
        </IonButton>
      </div>
    </div>
  )
}

export default Login
