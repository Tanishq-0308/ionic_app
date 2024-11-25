import { IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import Home from './Home';
import Settings from './Settings';
import { homeOutline, logOutOutline, settingsOutline } from 'ionicons/icons';

const Menu: React.FC = () => {
    const paths=[
        {name:'Home', path:'/app/home', icon:homeOutline},
        {name:'Settings', path:'/app/settings', icon:settingsOutline},
        {name:'Logout', path:'/signin', icon:logOutOutline},
    ]

    return (
        <IonPage>
          <IonSplitPane contentId='main'>
          <IonMenu contentId='main'>
            <IonHeader>
                <IonToolbar color='secondary'>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {paths.map((item,index)=>(
                    <IonMenuToggle key={index} autoHide={false}>
                            <IonItem routerDirection='none' routerLink={item.path}>
                        {item.name}
                        <IonIcon icon={item.icon} slot='start'></IonIcon>
                    </IonItem>
                    </IonMenuToggle>
                    
                ))}
            </IonContent>
            </IonMenu>

            <IonRouterOutlet id='main'>
                <Route exact path="/app/home" component={Home}/>
                <Route exact path="/app/settings" component={Settings}/>
                <Route exact path="/app">
                    <Redirect to="/app/home"/>
                </Route>
            </IonRouterOutlet>  
          </IonSplitPane>
        </IonPage>
    );
};

export default Menu;