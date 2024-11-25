import { IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {

    return (
        <IonPage>
        <IonHeader>
          <IonToolbar color='primary'>
          <IonButton slot='start' fill='clear' color={'light'}>
                    <IonMenuButton/>
                </IonButton>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonContent>
      </IonPage>
    );
};

export default Home;