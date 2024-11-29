import { IonButton, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import Tab1 from './Tab1';
import { ellipse, triangle } from 'ionicons/icons';

const Settings: React.FC = () => {

    return (
        <IonTabs>
            <IonTabBar slot='bottom'>
                <IonTabButton href='/app/settings/tab1' tab='tab1' aria-label="Tab 1: First tab">
                    <IonIcon icon={triangle}/> Tab 1
                </IonTabButton>
            </IonTabBar>

            <IonRouterOutlet>
                <Route path="/app/settings/tab1" component={Tab1}/>
                <Route path="/app/settings" exact>
                    <Redirect to="/app/settings/tab1"/>
                </Route>
            </IonRouterOutlet>
        </IonTabs>
    );
};

export default Settings;