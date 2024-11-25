import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import {flag, logInOutline, personCircleOutline} from 'ionicons/icons'
import INTRO from '../components/INTRO';
import { Preferences } from '@capacitor/preferences';
import btlogo from '../assets/BT-logo.svg'

const Signin: React.FC = () => {
    const router= useIonRouter();
    const INTRO_KEY='intro-seen'
    const [intro, setIntro] = useState(false)
    const [present, dismiss]=useIonLoading();

    useEffect(()=>{
       const checkStorage= async()=>{
        const seen = await Preferences.get({key:INTRO_KEY})
        setIntro(seen.value==='true')
    }
    checkStorage();
    },[])
    
    const finishIntro=async()=>{
        console.log("FIn");
        setIntro(true )
        Preferences.set({key:INTRO_KEY, value: 'true'})
    }

    const seenIntroAgain=()=>{
        setIntro(false);
        Preferences.remove({key:INTRO_KEY})
    }

    const doLogin=(e:any)=>{
        e.preventDefault();
        present("Logging in...")
        setTimeout(() => {
            dismiss()
            router.push('/app','root')
        }, 2000);
    }
    return (
       <>
         {!intro ? (<INTRO onFinish={finishIntro}/>) :
        (<IonPage>
            <IonHeader>
                <IonToolbar color="warning" className='ion-text-center'>
                    <IonTitle >Login page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid fixed>
                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                <div className='ion-padding' style={{margin:'20px'}}>
                    <img src={btlogo} alt=""/>
                </div>
                        </IonCol>
                    </IonRow>
                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                        <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
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
                            <IonButton expand='block' className='ion-margin-top' fill='clear' color='medium' size='small' onClick={seenIntroAgain} >
                                Watch intro again
                                <IonIcon slot='end' icon={personCircleOutline}></IonIcon>
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                
            </IonContent>
        </IonPage>)}
       </>
    );
};

export default Signin;