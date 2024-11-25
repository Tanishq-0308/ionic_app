import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import './intro.css'
import { arrowForwardCircle, moveSharp } from 'ionicons/icons';

interface containerProps{
    onFinish:()=> void;
}

const SwiperNextButton=({children}:any)=>{
    const swiper = useSwiper();
    return <IonButton onClick={()=>swiper.slideNext()} color={'transparent'}>{children} <IonIcon icon={arrowForwardCircle}></IonIcon></IonButton>
}

const INTRO: React.FC<containerProps> = ({onFinish}) => {

    return (
       <Swiper>
        <SwiperSlide>
            intro 1
            <SwiperNextButton></SwiperNextButton>
        </SwiperSlide>
        <SwiperSlide>
            intro 2
            <SwiperNextButton></SwiperNextButton>
        </SwiperSlide>
        <SwiperSlide>
            intro 3
            <IonButton onClick={()=> onFinish()}>Finish</IonButton>
        </SwiperSlide>
       </Swiper>
    );
};

export default INTRO;