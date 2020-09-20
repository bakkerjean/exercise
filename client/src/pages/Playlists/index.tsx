import React, { useEffect, useState } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonLabel,
} from '@ionic/react'

const Playlists: React.FC = () => {
  const [playlists, setPlaylists] = useState([{}])
  const [newPlaylist, setNewPlaylist] = useState({ name: '' })

  const getPlaylists = () => {
    const lists = JSON.parse(sessionStorage.getItem('rocklists') || '{}')
    if (lists && lists.length) {
      setPlaylists(lists)
    }
  }

  const createPlaylist = () => {
    if (newPlaylist.name.length) {
      const newPlaylists = [...playlists, newPlaylist]
      setPlaylists(newPlaylists)
      setNewPlaylist({ name: '' })
      sessionStorage.setItem('rocklists', JSON.stringify(newPlaylists))
      getPlaylists()
    }
  }

  useEffect(() => {
    getPlaylists()
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Playlists</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput
                  value={newPlaylist.name}
                  clearInput
                  placeholder="Enter name"
                  onIonChange={(e) => setNewPlaylist({ name: e.detail.value! })}
                ></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonButton
                expand="block"
                fill="outline"
                onClick={() => createPlaylist()}
              >
                create playlist
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          {playlists.map((playlist: any, i) => {
            if (playlist.name) {
              return (
                <IonItem key={i}>
                  <IonLabel>{playlist.name}</IonLabel>
                </IonItem>
              )
            }
          })}
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Playlists
