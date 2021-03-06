import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';



const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>

    <IonFab vertical="bottom" horizontal="center" slot="fixed">
      <IonFabButton onClick={() => takePhoto()}>
        <IonIcon icon={camera}></IonIcon>
      </IonFabButton>
    </IonFab>

    </IonPage>
  );
};

export default Tab2;
