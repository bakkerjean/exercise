import React, { useEffect, useState } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonList,
  IonLabel,
  IonButton,
} from '@ionic/react'

const Artists: React.FC = () => {
  const [artists, setArtists] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const limit = 12

  const search = (newQuery: string, page: number) => {
    setPage(page)

    fetch(
      `http://localhost:3001/artists?_page=${page}&_limit=${limit}&q=${newQuery}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (newQuery === query) {
          setArtists(artists.concat(data))
        } else {
          setArtists(data)
        }
      })

    setQuery(newQuery)
  }

  const loadMore = (query: string, page: number) => {
    search(query, page)
  }

  useEffect(() => {
    search('', 1)
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Artists</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonInput
            clearInput
            placeholder="Search..."
            onIonChange={(e) => search(e.detail.value!, page)}
          ></IonInput>
        </IonItem>
        {!artists.length ? (
          <div className="container">No artists found baby!</div>
        ) : null}
        {artists.length ? (
          <>
            <IonList>
              {artists.map((artist: any) => {
                return (
                  <IonItem key={artist.id}>
                    <IonLabel>{artist.name}</IonLabel>
                  </IonItem>
                )
              })}
            </IonList>
            <IonButton
              expand="block"
              fill="outline"
              onClick={() => loadMore(query, page + 1)}
            >
              Load more
            </IonButton>
          </>
        ) : null}
      </IonContent>
    </IonPage>
  )
}

export default Artists
