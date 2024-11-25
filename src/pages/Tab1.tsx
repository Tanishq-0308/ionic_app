import { IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Tab1: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'tertiary'}>
                <IonButton slot='start' fill='clear' color={'light'}>
                    <IonMenuButton/>
                </IonButton>
                    <IonTitle>Tab1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                UI goes here...
            </IonContent>
        </IonPage>
    );
};

export default Tab1;