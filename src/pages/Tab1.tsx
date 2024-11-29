import { Camera, CameraResultType } from '@capacitor/camera';
import { CreateAnimation, createGesture, Gesture, GestureDetail, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import React, { useRef, useState } from 'react';

const Tab1: React.FC = () => {
    const animationRef= useRef<CreateAnimation | null>(null);
    const elementRef= useRef<HTMLDivElement>(null);
    const [image,setImage]=useState<any>(null);

    useIonViewDidEnter(()=>{
        const gesture: Gesture= createGesture({
            el: elementRef.current!,
            gestureName:'my-gesture',
            onMove:(ev)=>onMoveHandler(ev),
            threshold:0
        })
        gesture.enable();


        // animationRef.current?.animation.play();
    })

    const onMoveHandler=(detail:GestureDetail)=>{
        console.log(detail);
        const x= detail.currentX -detail.startX;
        const y=detail.currentY- detail.startY;

        elementRef.current!.style.transform=`translate(${x}px, ${y}px)`
    }

    const takePicture= async()=>{
        const image= await Camera.getPhoto({
            quality:90,
            allowEditing:false,
            resultType: CameraResultType.Base64,
        })

        const img=`data:image/jpeg;base64,${image.base64String}`;
        setImage(img);
    }
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
            <CreateAnimation 
                 ref={animationRef}
                    duration={2000}
                    iterations={Infinity}
                    delay={1000}
                    keyframes={[
                        {offset:0,transform:'scale(1)', opacity:'1'},
                        {offset:0.5,transform:'scale(1.5)', opacity:'0.5'},
                        {offset:1,transform:'scale(1)', opacity:'1'}
                    ]}
                 >
                    <IonButton expand='block' color={'success'} className='ion-margin'>
                        Join Ionic Academy
                    </IonButton>
                 </CreateAnimation>

                    <IonButton expand='block' onClick={takePicture}>
                        <img src={image} alt="" />Take picture
                    </IonButton>
                 {/* <div ref={elementRef} style={{width:50, height:50, backgroundColor:'red'}}></div> */}
            </IonContent>
        </IonPage>
    );
};

export default Tab1;