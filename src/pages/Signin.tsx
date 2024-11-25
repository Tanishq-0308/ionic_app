import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import {logInOutline, personCircleOutline} from 'ionicons/icons'
import INTRO from '../components/INTRO';

const Signin: React.FC = () => {
    const [intro, setIntro] = useState(false)
    
    const finishIntro=async()=>{
        console.log("FIn");
        setIntro(true )
    }
    return (
       <>
         {!intro ? (<INTRO onFinish={finishIntro}/>) :
        (<IonPage>
            <IonHeader>
                <IonToolbar color="success">
                    <IonTitle >Login page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <form action="">
                            <IonInput label='Email' fill='outline' type='email' placeholder='tanishq@gmail.com' labelPlacement='floating'></IonInput>
                            <IonInput className='ion-margin-top' label='Password' fill='outline' type='password' placeholder='password' labelPlacement='floating'></IonInput>
                            <IonButton expand='block' className='ion-margin-top' color='primary' type='submit'>
                                Login
                                <IonIcon slot='end' icon={logInOutline}></IonIcon>
                            </IonButton>
                            <IonButton expand='block' className='ion-margin-top' color='secondary' routerLink='/register'>
                                Create account
                                <IonIcon slot='end' icon={personCircleOutline}></IonIcon>
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>)}
       </>
    );
};

export default Signin;