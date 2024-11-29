import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonDatetime, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonModal, IonPage, IonRefresher, IonRefresherContent, IonSearchbar, IonSegment, IonSegmentButton, IonSkeletonText, IonTitle, IonToolbar, useIonAlert, useIonToast, useIonViewWillEnter } from '@ionic/react';
import { addOutline, trashBinOutline } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';

const Home: React.FC = () => {
  const [loading,setLoading]=useState<boolean>(true);
  const [users,setUsers]= useState<any[]>([]);
  const [showAlert]= useIonAlert();
  const [showToast]= useIonToast();
  const [selectedUser,setSelectedUser]= useState<any>(null);
  const modal= useRef<HTMLIonModalElement>(null);
  const cardModal = useRef<HTMLIonModalElement>(null);
  const page= useRef(null);
  const [presentingELement, setPresentingElement]= useState<HTMLElement | null>(null);
  const [activeSegment,setActiveSegment]= useState<any>('details');

  useEffect(()=>{
    setPresentingElement(page.current)
  },[]);

  useIonViewWillEnter( async () =>{
    const users= await getUsers();
    setUsers(users);
    setLoading(false);
  })

  const getUsers=async()=>{
    const data= await fetch('https://randomuser.me/api?results=10');
    const users= await data.json();
    return users.results;
  }

  const clearList=()=>{
    showAlert({
      header:'Confirm!',
      message:'Are you sure you want to delete all users?',
      buttons:[
        {text:'Cancel', role:'cancel'},
        {
          text:'Delete',
          handler:()=>{
            setUsers([]);
            showToast({
              message:'All users deleted',
              duration:2000,
              color:'danger',
            })
          }
        }
      ]
    })
  }

  const doRefresh= async (ev:any)=>{
    const data = await getUsers();
    setUsers(data);
    ev.detail.complete();
  }

    return (
        <IonPage ref={page}>
        <IonHeader>
          <IonToolbar color='primary'>
          <IonButton slot='start' fill='clear'>
                    <IonMenuButton color={'light'}/>
                </IonButton>
            <IonTitle>List</IonTitle>
            <IonButtons slot='end'>
              <IonButton onClick={clearList}>
                <IonIcon slot='icon-only' icon={trashBinOutline} color='light'/>
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar color={'primary'}>
            <IonSearchbar/>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonRefresher slot='fixed' onIonRefresh={(ev)=>doRefresh(ev)}>
            <IonRefresherContent/>
          </IonRefresher>

          {loading && 
            [...Array(10)].map((_,index)=>(
              <IonCard key={index}> 
          <IonCardContent className='ion-no-padding'>
            <IonItem lines='none'>
              <IonAvatar slot='start'>
                <IonSkeletonText/>
              </IonAvatar>
              <IonLabel>
              <IonSkeletonText animated style={{width:'150px'}}/>
                <p><IonSkeletonText/></p>
              </IonLabel>
              <IonChip slot='end'>
                
              </IonChip>
            </IonItem>
          </IonCardContent>
          </IonCard>
            ))
          }

         {users.map((user,index)=>(
          <IonCard key={index} onClick={()=>setSelectedUser(user)}> 
          <IonCardContent className='ion-no-padding'>
            <IonItem lines='none'>
              <IonAvatar slot='start'>
                <IonImg src={user.picture.thumbnail}/>
              </IonAvatar>
              <IonLabel>
                {user.name.first} {user.name.last}
                <p>{user.email}</p>
              </IonLabel>
              <IonChip slot='end'>
                {user.nat}
              </IonChip>
            </IonItem>
          </IonCardContent>
          </IonCard>
         ))}

         <IonModal ref={modal} isOpen={selectedUser !== null} breakpoints={[0, 0.5, 0.8]} initialBreakpoint={0.5}
          onIonModalDidDismiss={()=>setSelectedUser(null)}
         >
            <IonHeader>
              <IonToolbar color={'light'}>
                <IonButtons slot='start'>
                  <IonButton onClick={()=> modal.current?.dismiss()}>CLose</IonButton>
                </IonButtons>
                <IonTitle>
                  {selectedUser?.name.first} {selectedUser?.name.last}
                </IonTitle>
              </IonToolbar>
              <IonToolbar color={'light'}>
                <IonSegment value={activeSegment} onIonChange={(e)=>setActiveSegment(e.detail.value!)}>
                    <IonSegmentButton value='details'>Details</IonSegmentButton>
                    <IonSegmentButton value='calender'>Calender</IonSegmentButton>
                </IonSegment>
              </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
              {activeSegment === 'details' && (
                <IonCard>
                  <IonAvatar slot='start'>
                    <IonImg src={selectedUser?.picture.large}></IonImg>
                  </IonAvatar>
                  <IonCardContent className='ion-no-padding'>
                    <IonItem lines='none'>
                      <IonLabel className='ion-text-wrap'>
                        {selectedUser?.name.first}{selectedUser?.name.last}
                        <p>{selectedUser?.email}</p>
                      </IonLabel>
                    </IonItem>
                  </IonCardContent>
                </IonCard>
              )}
              {activeSegment === 'calender' && <IonDatetime/>}
            </IonContent>
         </IonModal>
        </IonContent>

        <IonModal ref={cardModal} trigger='card-modal'
          presentingElement={presentingELement!}
         >
            <IonHeader>
              <IonToolbar color={'success'}>
                <IonButtons slot='start'>
                  <IonButton onClick={()=> cardModal.current?.dismiss()}>CLose</IonButton>
                </IonButtons>
                <IonTitle>
                  Card Modal
                </IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <p>My card modal</p>
            </IonContent>
         </IonModal>

         <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton id='card-modal'>
            <IonIcon icon={addOutline}></IonIcon>
          </IonFabButton>
         </IonFab>
      </IonPage>
    );
};

export default Home;