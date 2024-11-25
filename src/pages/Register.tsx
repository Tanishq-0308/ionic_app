import { IonBackButton, IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmark, checkmarkDone } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const router= useIonRouter();

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        router.push('/signin','root')
    }

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar color="success">
                <IonButton slot='start' color='transparent'>
                    <IonBackButton defaultHref='/'/>
                </IonButton>
                <IonTitle >Registeration</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
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
        </IonContent>
    </IonPage>
    );
};

export default Register;