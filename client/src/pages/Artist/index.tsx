import React, { useEffect, useState } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonItem,
  IonButtons,
  IonBackButton,
} from '@ionic/react'

const Artist: React.FC = (props: any) => {
  const [songs, setSongs] = useState([])
  const [artistName, setArtistName] = useState('')

  const artistId = props.location.pathname.split('/')[2]

  useEffect(() => {
    fetch(`http://localhost:3001/artists?id=${artistId}`)
      .then((response) => response.json())
      .then((data) => {
        const artist = data[0]
        setArtistName(artist.name)
        const artistNameUrlFriendly = artist.name.replace(' ', '%20')

        fetch(`http://localhost:3001/songs?artist=${artistNameUrlFriendly}`)
          .then((response) => response.json())
          .then((data) => {
            setSongs(data)
          })
      })
  }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/artists" />
          </IonButtons>
          <IonTitle>{artistName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {!songs.length ? (
          <div className="container">
            Sorry, we couldn't find any songs today.. :(
          </div>
        ) : null}
        {songs.length ? (
          <>
            <IonList>
              {songs.map((song: any) => {
                return (
                  <IonItem key={song.id}>
                    <IonLabel>{song.name}</IonLabel>
                  </IonItem>
                )
              })}
            </IonList>
          </>
        ) : null}
      </IonContent>
    </IonPage>
  )
}

export default Artist
