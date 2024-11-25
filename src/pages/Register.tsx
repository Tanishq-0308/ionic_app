import { IonBackButton, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmark, checkmarkDone } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const router = useIonRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push('/signin', 'root')
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="warning">
                    <IonButton slot='start' color='dark' size='small' fill='clear'>
                        <IonBackButton defaultHref='/'/>
                    </IonButton>
                    <IonTitle className='ion-text-center'>Registration</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid fixed>
                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                            <IonCard>
                                <IonCardContent>
                                    <form onSubmit={handleSubmit}>
                                        <IonInput label='Email' fill='outline' type='email' placeholder='tanishq@gmail.com' labelPlacement='floating'></IonInput>
                                        <IonInput className='ion-margin-top' label='Password' fill='outline' type='password' placeholder='password' labelPlacement='floating'></IonInput>
                                        <IonButton expand='block' className='ion-margin-top' color='primary' type='submit'>
                                            Create my Account
                                            <IonIcon slot='end' icon={checkmarkDone}></IonIcon>
                                        </IonButton>
                                    </form>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default Register;