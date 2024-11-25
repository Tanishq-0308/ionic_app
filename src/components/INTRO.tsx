import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import './intro.css'
import { arrowForwardCircle, moveSharp } from 'ionicons/icons';
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'

interface containerProps{
    onFinish:()=> void;
}

const SwiperNextButton=({children}:any)=>{
    const swiper = useSwiper();
    return <IonButton onClick={()=>swiper.slideNext()} className='ion-margin-top'>{children} </IonButton>
}

const INTRO: React.FC<containerProps> = ({onFinish}) => {

    return (
       <Swiper>
        <SwiperSlide>
            <img src={icon1} alt="" />
            <h1>Welcome to the Ionic App</h1>
            <SwiperNextButton>Next</SwiperNextButton>
        </SwiperSlide>
        <SwiperSlide>
            <img src={icon2} alt="" />
            <h1>Slide more to login</h1>
            <SwiperNextButton>Next</SwiperNextButton>
        </SwiperSlide>
        <SwiperSlide>
            <img src={icon3} alt="" />
            <h1>Go to login page</h1>
            <IonButton onClick={()=> onFinish()} className='ion-margin-top'>Finish</IonButton>
        </SwiperSlide>
       </Swiper>
    );
};

export default INTRO;